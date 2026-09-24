// src/components/steps/StepInfos.jsx
export default function StepInfos({ data, updateField, errors, onBack }) {
  return (
    <div>
      <div className="two-col">
        <div>
          <h2>Vos informations</h2>

          <label>Nom complet</label>
          <input
            value={data.fullName}
            onChange={e => updateField('fullName', e.target.value)}
            placeholder="Ex: Jean Dupont"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}

          <label>Email</label>
          <input
            type="email"
            value={data.email}
            onChange={e => updateField('email', e.target.value)}
            placeholder="Ex: email@entreprise.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>WhatsApp</label>
          <input
            value={data.whatsapp}
            onChange={e => updateField('whatsapp', e.target.value)}
            placeholder="Ex: +216 29 720 020"
          />

          <label>Commentaire / Demandes spécifiques</label>
          <textarea
            value={data.comment}
            onChange={e => updateField('comment', e.target.value)}
            placeholder="Décrivez vos besoins particuliers..."
          />
        </div>

        <div>
          <h2>Informations entreprise (optionnel)</h2>

          <label>Nom de la société</label>
          <input
            value={data.companyName}
            onChange={e => updateField('companyName', e.target.value)}
            placeholder="Ex: Société ABC"
          />

          <div className="row">
            <div>
              <label>Département / Service</label>
              <input
                value={data.companyDepartment}
                onChange={e => updateField('companyDepartment', e.target.value)}
              />
            </div>
            <div>
              <label>Centre de coût</label>
              <input
                value={data.costCenter}
                onChange={e => updateField('costCenter', e.target.value)}
              />
            </div>
          </div>

          <label>Référence dossier</label>
          <input
            value={data.fileReference}
            onChange={e => updateField('fileReference', e.target.value)}
          />

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={data.isCompanyInvoicing}
              onChange={e => updateField('isCompanyInvoicing', e.target.checked)}
            />
            Facturation société
          </label>
        </div>
      </div>

      <div className="actions actions-start">
        <button type="button" className="btn-secondary" onClick={onBack}>← Précédent</button>
      </div>
    </div>
  );
}