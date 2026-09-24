<?php

// src/Controller/Api/BookingController.php
namespace App\Controller\Api;

use App\Entity\Booking;
use App\Repository\BookingRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/bookings')]
final class BookingController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private SerializerInterface $serializer,
        private ValidatorInterface $validator,
    ) {}

    #[Route('', name: 'api_booking_index', methods: ['GET'])]
    public function index(BookingRepository $repository): JsonResponse
    {
        $bookings = $repository->findAll();
        $json = $this->serializer->serialize($bookings, 'json', [
            'groups' => 'booking:read',
        ]);

        return new JsonResponse($json, 200, [], true);
    }

    #[Route('/{id}', name: 'api_booking_show', methods: ['GET'])]
    public function show(Booking $booking): JsonResponse
    {
        $json = $this->serializer->serialize($booking, 'json', [
            'groups' => 'booking:read',
        ]);

        return new JsonResponse($json, 200, [], true);
    }

    #[Route('', name: 'api_booking_create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        try {
            $booking = $this->serializer->deserialize(
                $request->getContent(),
                Booking::class,
                'json',
                ['groups' => 'booking:write']
            );
        } catch (\Exception $e) {
            return $this->json(['error' => 'Invalid JSON payload: ' . $e->getMessage()], 400);
        }

        $errors = $this->validator->validate($booking);
        if (count($errors) > 0) {
            return $this->json(['errors' => $this->formatErrors($errors)], 422);
        }

        $this->em->persist($booking);
        $this->em->flush();

        $json = $this->serializer->serialize($booking, 'json', [
            'groups' => 'booking:read',
        ]);

        return new JsonResponse($json, 201, [], true);
    }

    #[Route('/{id}', name: 'api_booking_update', methods: ['PUT', 'PATCH'])]
    public function update(Request $request, Booking $booking): JsonResponse
    {
        try {
            $this->serializer->deserialize(
                $request->getContent(),
                Booking::class,
                'json',
                ['object_to_populate' => $booking, 'groups' => 'booking:write']
            );
        } catch (\Exception $e) {
            return $this->json(['error' => 'Invalid JSON payload: ' . $e->getMessage()], 400);
        }

        $errors = $this->validator->validate($booking);
        if (count($errors) > 0) {
            return $this->json(['errors' => $this->formatErrors($errors)], 422);
        }

        $this->em->flush();

        $json = $this->serializer->serialize($booking, 'json', [
            'groups' => 'booking:read',
        ]);

        return new JsonResponse($json, 200, [], true);
    }

    #[Route('/{id}', name: 'api_booking_delete', methods: ['DELETE'])]
    public function delete(Booking $booking): JsonResponse
    {
        $this->em->remove($booking);
        $this->em->flush();

        return new JsonResponse(null, 204);
    }

    private function formatErrors($errors): array
    {
        $formatted = [];
        foreach ($errors as $error) {
            $formatted[$error->getPropertyPath()] = $error->getMessage();
        }

        return $formatted;
    }
}