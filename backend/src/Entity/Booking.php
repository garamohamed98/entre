<?php

namespace App\Entity;

use App\Repository\BookingRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: BookingRepository::class)]
class Booking
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['booking:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $serviceType = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $departureLocation = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $destination = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Assert\NotNull]
    #[Groups(['booking:read', 'booking:write'])]
    private ?\DateTime $departureDate = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    #[Assert\NotNull]
    #[Groups(['booking:read', 'booking:write'])]
    private ?\DateTime $departureTime = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?\DateTime $returnDate = null;

    #[ORM\Column(type: Types::TIME_MUTABLE, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?\DateTime $returnTime = null;

    #[ORM\Column]
    #[Groups(['booking:read', 'booking:write'])]
    private ?bool $isRoundTrip = null;

    #[ORM\Column]
    #[Assert\NotNull]
    #[Assert\Positive]
    #[Groups(['booking:read', 'booking:write'])]
    private ?int $passengerCount = null;

    #[ORM\Column]
    #[Assert\NotNull]
    #[Assert\PositiveOrZero]
    #[Groups(['booking:read', 'booking:write'])]
    private ?int $luggageCount = null;

    #[ORM\Column]
    #[Groups(['booking:read', 'booking:write'])]
    private ?bool $hasBabySeat = null;

    #[ORM\Column]
    #[Groups(['booking:read', 'booking:write'])]
    private ?bool $hasPmrAssistance = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $vehicleType = null;

    #[ORM\Column]
    #[Groups(['booking:read', 'booking:write'])]
    private ?bool $hasMineralWater = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $fullName = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Email]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $email = null;

    #[ORM\Column(length: 50, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $whatsapp = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $comment = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $companyName = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $companyDepartment = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $costCenter = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['booking:read', 'booking:write'])]
    private ?string $fileReference = null;

    #[ORM\Column]
    #[Groups(['booking:read', 'booking:write'])]
    private ?bool $isCompanyInvoicing = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getServiceType(): ?string
    {
        return $this->serviceType;
    }

    public function setServiceType(string $serviceType): static
    {
        $this->serviceType = $serviceType;

        return $this;
    }

    public function getDepartureLocation(): ?string
    {
        return $this->departureLocation;
    }

    public function setDepartureLocation(string $departureLocation): static
    {
        $this->departureLocation = $departureLocation;

        return $this;
    }

    public function getDestination(): ?string
    {
        return $this->destination;
    }

    public function setDestination(string $destination): static
    {
        $this->destination = $destination;

        return $this;
    }

    public function getDepartureDate(): ?\DateTime
    {
        return $this->departureDate;
    }

    public function setDepartureDate(\DateTime $departureDate): static
    {
        $this->departureDate = $departureDate;

        return $this;
    }

    public function getDepartureTime(): ?\DateTime
    {
        return $this->departureTime;
    }

    public function setDepartureTime(\DateTime $departureTime): static
    {
        $this->departureTime = $departureTime;

        return $this;
    }

    public function getReturnDate(): ?\DateTime
    {
        return $this->returnDate;
    }

    public function setReturnDate(?\DateTime $returnDate): static
    {
        $this->returnDate = $returnDate;

        return $this;
    }

    public function getReturnTime(): ?\DateTime
    {
        return $this->returnTime;
    }

    public function setReturnTime(?\DateTime $returnTime): static
    {
        $this->returnTime = $returnTime;

        return $this;
    }

    public function isRoundTrip(): ?bool
    {
        return $this->isRoundTrip;
    }

    public function setIsRoundTrip(bool $isRoundTrip): static
    {
        $this->isRoundTrip = $isRoundTrip;

        return $this;
    }

    public function getPassengerCount(): ?int
    {
        return $this->passengerCount;
    }

    public function setPassengerCount(int $passengerCount): static
    {
        $this->passengerCount = $passengerCount;

        return $this;
    }

    public function getLuggageCount(): ?int
    {
        return $this->luggageCount;
    }

    public function setLuggageCount(int $luggageCount): static
    {
        $this->luggageCount = $luggageCount;

        return $this;
    }

    public function hasBabySeat(): ?bool
    {
        return $this->hasBabySeat;
    }

    public function setHasBabySeat(bool $hasBabySeat): static
    {
        $this->hasBabySeat = $hasBabySeat;

        return $this;
    }

    public function hasPmrAssistance(): ?bool
    {
        return $this->hasPmrAssistance;
    }

    public function setHasPmrAssistance(bool $hasPmrAssistance): static
    {
        $this->hasPmrAssistance = $hasPmrAssistance;

        return $this;
    }

    public function getVehicleType(): ?string
    {
        return $this->vehicleType;
    }

    public function setVehicleType(string $vehicleType): static
    {
        $this->vehicleType = $vehicleType;

        return $this;
    }

    public function hasMineralWater(): ?bool
    {
        return $this->hasMineralWater;
    }

    public function setHasMineralWater(bool $hasMineralWater): static
    {
        $this->hasMineralWater = $hasMineralWater;

        return $this;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): static
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getWhatsapp(): ?string
    {
        return $this->whatsapp;
    }

    public function setWhatsapp(?string $whatsapp): static
    {
        $this->whatsapp = $whatsapp;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): static
    {
        $this->comment = $comment;

        return $this;
    }

    public function getCompanyName(): ?string
    {
        return $this->companyName;
    }

    public function setCompanyName(?string $companyName): static
    {
        $this->companyName = $companyName;

        return $this;
    }

    public function getCompanyDepartment(): ?string
    {
        return $this->companyDepartment;
    }

    public function setCompanyDepartment(?string $companyDepartment): static
    {
        $this->companyDepartment = $companyDepartment;

        return $this;
    }

    public function getCostCenter(): ?string
    {
        return $this->costCenter;
    }

    public function setCostCenter(?string $costCenter): static
    {
        $this->costCenter = $costCenter;

        return $this;
    }

    public function getFileReference(): ?string
    {
        return $this->fileReference;
    }

    public function setFileReference(?string $fileReference): static
    {
        $this->fileReference = $fileReference;

        return $this;
    }

    public function isCompanyInvoicing(): ?bool
    {
        return $this->isCompanyInvoicing;
    }

    public function setIsCompanyInvoicing(bool $isCompanyInvoicing): static
    {
        $this->isCompanyInvoicing = $isCompanyInvoicing;

        return $this;
    }
}