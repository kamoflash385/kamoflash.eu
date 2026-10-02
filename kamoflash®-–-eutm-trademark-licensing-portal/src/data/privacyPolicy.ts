import { Language } from '../types/index.ts';

export interface PrivacySection {
  title: string;
  content: string[];
}

export interface PrivacyPolicyContent {
  title: string;
  subtitle: string;
  lastUpdated: string;
  responsibleTitle: string;
  responsibleName: string;
  responsibleAddress: string;
  responsiblePhone: string;
  responsibleEmail: string;
  sections: PrivacySection[];
  closeBtn: string;
}

export const PRIVACY_POLICY: Record<Language, PrivacyPolicyContent> = {
  de: {
    title: 'Datenschutzerklärung',
    subtitle: 'Informationen über die Verarbeitung personenbezogener Daten gemäß der Datenschutz-Grundverordnung (DSGVO)',
    lastUpdated: 'Stand: Oktober 2025 / Aktualisiert für EUTM-Lizenzierungsportal',
    responsibleTitle: '1. Verantwortliche Stelle im Sinne der DSGVO',
    responsibleName: 'KAMOFLASH',
    responsibleAddress: 'Saalburgallee 39, 60385 Frankfurt am Main, Deutschland',
    responsiblePhone: '+49 (0) 171 5635018',
    responsibleEmail: 'info@kamoflash-recordz.com',
    sections: [
      {
        title: '2. Grundsätzliches zum Datenschutz',
        content: [
          'Der Schutz Ihrer personenbezogenen Daten ist für KAMOFLASH von höchster Priorität. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften der Europäischen Union (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG).',
          'Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wenn Sie dieses B2B-Markenlizenzierungsportal besuchen oder über unser Anfrageformular Kontakt bezüglich einer Lizenzierung der Marke KAMOFLASH (EUTM No. 019087974) aufnehmen.',
        ],
      },
      {
        title: '3. Datenerfassung auf diesem Portal',
        content: [
          'a) Server-Log-Dateien: Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Informationen (z. B. IP-Adresse in anonymisierter Form, Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners sowie Uhrzeit der Serveranfrage). Diese Daten sind technisch notwendig, um die Website stabil und sicher bereitzustellen (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).',
          'b) B2B-Lizenzierungsformular & Kontaktaufnahme: Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular (Unternehmen, Name der Kontaktperson, geschäftliche E-Mail-Adresse, Telefonnummer, Website, Branche, gewünschtes Lizenzmodell, vorgemerkte EUTM-Schutzklassen und Projektbeschreibung) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet und gespeichert.',
        ],
      },
      {
        title: '4. Rechtsgrundlagen der Verarbeitung',
        content: [
          'Die Verarbeitung der über das B2B-Formular übermittelten Daten erfolgt zur Durchführung vorvertraglicher Maßnahmen und zur Anbahnung eines Lizenz- bzw. Partnerschaftsvertrages auf Ihre Anfrage hin (Art. 6 Abs. 1 lit. b DSGVO).',
          'Soweit eine weitergehende Speicherung aus handels- oder steuerrechtlichen Gründen gesetzlich vorgeschrieben ist, erfolgt diese auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.',
          'Die Verarbeitung von Server-Logdaten basiert auf unserem berechtigten Interesse an einem fehlerfreien und sicheren Betrieb des Portals (Art. 6 Abs. 1 lit. f DSGVO).',
        ],
      },
      {
        title: '5. Keine Weitergabe an Dritte & Verzicht auf Tracking-Cookies',
        content: [
          'Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir setzen auf dieser Website keine Werbe-Tracker, keine invasiven Third-Party-Cookies und kein Social-Media-Tracking ein.',
          'Daten aus Lizenzanfragen werden ausschließlich intern durch KAMOFLASH zur Prüfung von Gebietsrechten, Exklusivität und Vertragsgestaltung ausgewertet.',
        ],
      },
      {
        title: '6. SSL- bzw. TLS-Verschlüsselung',
        content: [
          'Dieses Portal nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie beispielsweise Lizenzanfragen, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.',
        ],
      },
      {
        title: '7. Speicherdauer',
        content: [
          'Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage oder Nichtzustandekommen eines Lizenzvertrags), Sie uns zur Löschung auffordern oder gesetzliche Aufbewahrungsfristen (z. B. nach HGB oder AO) ablaufen.',
        ],
      },
      {
        title: '8. Ihre Rechte als betroffene Person nach der DSGVO',
        content: [
          'Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen folgende Rechte:',
          '• Recht auf Auskunft (Art. 15 DSGVO) über Ihre bei uns gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Datenverarbeitung.',
          '• Recht auf Berichtigung (Art. 16 DSGVO) unrichtiger oder unvollständiger Daten.',
          '• Recht auf Löschung (Art. 17 DSGVO) Ihrer bei uns gespeicherten Daten ("Recht auf Vergessenwerden").',
          '• Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO).',
          '• Recht auf Datenübertragbarkeit (Art. 20 DSGVO) in einem strukturierten, gängigen und maschinenlesbaren Format.',
          '• Widerspruchsrecht (Art. 21 DSGVO) gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.',
          'Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung per E-Mail an: info@kamoflash-recordz.com',
        ],
      },
      {
        title: '9. Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde',
        content: [
          'Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde zu (Art. 77 DSGVO).',
          'Zuständige Aufsichtsbehörde für das Land Hessen ist: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit, Postfach 3163, 65021 Wiesbaden / Gustav-Stresemann-Ring 1, 65189 Wiesbaden (https://datenschutz.hessen.de).',
        ],
      },
    ],
    closeBtn: 'Datenschutzerklärung schließen',
  },

  en: {
    title: 'Privacy Policy',
    subtitle: 'Information regarding the processing of personal data pursuant to the EU General Data Protection Regulation (GDPR)',
    lastUpdated: 'Version: October 2025 / EUTM Licensing Portal',
    responsibleTitle: '1. Data Controller within the meaning of the GDPR',
    responsibleName: 'KAMOFLASH',
    responsibleAddress: 'Saalburgallee 39, 60385 Frankfurt am Main, Germany',
    responsiblePhone: '+49 (0) 171 5635018',
    responsibleEmail: 'info@kamoflash-recordz.com',
    sections: [
      {
        title: '2. General Information on Data Protection',
        content: [
          'The protection of your business and personal data is a top priority for KAMOFLASH. We treat your data confidentially and in strict compliance with the European Union General Data Protection Regulation (GDPR) and applicable German data protection laws.',
          'This Privacy Policy outlines how data is gathered and processed when visiting this official licensing platform or submitting licensing proposals for the European Union Trademark KAMOFLASH (EUTM No. 019087974).',
        ],
      },
      {
        title: '3. Data Collection on this Website',
        content: [
          'a) Server Log Files: When visiting our website, technical connection records (e.g. anonymized IP address, browser type and version, operating system, referrer URL, and timestamp) are temporarily captured to maintain platform stability and cybersecurity (Legal basis: Art. 6(1)(f) GDPR).',
          'b) B2B Licensing Inquiry Form: When submitting an inquiry, the details entered in the proposal form (Company name, contact person name, business email, telephone, website, industry sector, desired licensing model, selected EUTM classes, and proposal details) are recorded to evaluate and respond to your commercial request.',
        ],
      },
      {
        title: '4. Legal Bases of Processing',
        content: [
          'The processing of data submitted via the inquiry form is carried out to take steps prior to entering into a trademark licensing or co-branding contract at your request (Art. 6(1)(b) GDPR).',
          'Where statutory record-keeping periods apply, processing is based on Art. 6(1)(c) GDPR.',
          'Technical operational logging is justified by our legitimate interest in providing a reliable, secure service (Art. 6(1)(f) GDPR).',
        ],
      },
      {
        title: '5. Non-Disclosure to Third Parties & Zero Advertising Trackers',
        content: [
          'Your corporate data will never be transferred, sold, or disclosed to third parties for advertising purposes. This website operates without third-party tracking pixels, marketing cookies, or behavioral advertising tools.',
          'Inquiry records are accessed exclusively by KAMOFLASH trademark management and legal counsel to assess exclusivity and licensing terms.',
        ],
      },
      {
        title: '6. SSL / TLS Encryption',
        content: [
          'This website utilizes standard SSL/TLS encryption across all data pathways to safeguard confidential information during transmission.',
        ],
      },
      {
        title: '7. Retention Period',
        content: [
          'We retain submitted inquiry information only for as long as necessary to complete commercial licensing negotiations or to fulfill statutory commercial documentation duties.',
        ],
      },
      {
        title: '8. Your Rights under the GDPR',
        content: [
          'Under the GDPR, you are entitled to the following rights free of charge:',
          '• Right of access (Art. 15 GDPR) regarding your stored personal data.',
          '• Right to rectification (Art. 16 GDPR) of inaccurate information.',
          '• Right to erasure (Art. 17 GDPR - "right to be forgotten").',
          '• Right to restriction of processing (Art. 18 GDPR).',
          '• Right to data portability (Art. 20 GDPR).',
          '• Right to object (Art. 21 GDPR) to data processing based on legitimate interests.',
          'To exercise these rights, please write to: info@kamoflash-recordz.com',
        ],
      },
      {
        title: '9. Right to Lodge a Complaint with a Supervisory Authority',
        content: [
          'You have the right to lodge a complaint with a competent supervisory authority if you consider that the processing of personal data relating to you infringes the GDPR (Art. 77 GDPR). The responsible authority for our registered jurisdiction is Der Hessische Beauftragte für Datenschutz und Informationsfreiheit in Wiesbaden, Germany.',
        ],
      },
    ],
    closeBtn: 'Close Privacy Policy',
  },

  es: {
    title: 'Política de Privacidad',
    subtitle: 'Información sobre el tratamiento de datos personales conforme al Reglamento General de Protección de Datos (RGPD)',
    lastUpdated: 'Versión: Octubre 2025 / Portal de Licencias EUTM',
    responsibleTitle: '1. Responsable del tratamiento (RGPD)',
    responsibleName: 'KAMOFLASH',
    responsibleAddress: 'Saalburgallee 39, 60385 Fráncfort del Meno, Alemania',
    responsiblePhone: '+49 (0) 171 5635018',
    responsibleEmail: 'info@kamoflash-recordz.com',
    sections: [
      {
        title: '2. Principios de Protección de Datos',
        content: [
          'KAMOFLASH garantiza la máxima confidencialidad en el tratamiento de los datos personales y empresariales, en cumplimiento estricto del RGPD de la Unión Europea.',
          'Esta política explica el uso de los datos facilitados a través del portal de licencias de la marca KAMOFLASH (EUTM Nº 019087974).',
        ],
      },
      {
        title: '3. Recogida y Tratamiento de Datos',
        content: [
          'a) Registros del servidor (Log files): El servidor web recoge automáticamente datos técnicos básicos para garantizar la seguridad y operatividad de la página (Art. 6.1.f RGPD).',
          'b) Formulario de solicitud de licencia B2B: Los datos introducidos (nombre de la empresa, persona de contacto, correo electrónico, teléfono, sector y propuesta) se tratan exclusivamente para evaluar y responder a la propuesta comercial.',
        ],
      },
      {
        title: '4. Base Jurídica del Tratamiento',
        content: [
          'La base legal para el tratamiento de las solicitudes de licencia es la aplicación de medidas precontractuales a petición del interesado (Art. 6.1.b RGPD).',
        ],
      },
      {
        title: '5. Confidencialidad y Ausencia de Cookies Publicitarias',
        content: [
          'No se cederán datos a terceros ni se emplean cookies de seguimiento comercial invasivas.',
        ],
      },
      {
        title: '6. Derechos de la Persona Afectada',
        content: [
          'Dispone de los derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición conforme a los artículos 15 a 21 del RGPD.',
          'Para ejercer sus derechos, puede contactar con nosotros en: info@kamoflash-recordz.com',
        ],
      },
    ],
    closeBtn: 'Cerrar Política de Privacidad',
  },

  fr: {
    title: 'Politique de Confidentialité',
    subtitle: 'Informations relatives au traitement des données personnelles conformément au Règlement Général sur la Protection des Données (RGPD)',
    lastUpdated: 'Version : Octobre 2025 / Portail de Licences EUTM',
    responsibleTitle: '1. Responsable du traitement au sens du RGPD',
    responsibleName: 'KAMOFLASH',
    responsibleAddress: 'Saalburgallee 39, 60385 Francfort-sur-le-Main, Allemagne',
    responsiblePhone: '+49 (0) 171 5635018',
    responsibleEmail: 'info@kamoflash-recordz.com',
    sections: [
      {
        title: '2. Principes Généraux de Protection des Données',
        content: [
          'KAMOFLASH s’engage à traiter l’ensemble des données professionnelles et personnelles dans le respect le plus strict du RGPD européen.',
          'Cette politique détaille les modalités de traitement des données dans le cadre des demandes de licence pour la marque KAMOFLASH (EUTM N° 019087974).',
        ],
      },
      {
        title: '3. Collecte des Données',
        content: [
          'a) Fichiers journaux serveur : Informations techniques anonymisées pour assurer la sécurité et le bon fonctionnement du site (Art. 6, par. 1, point f du RGPD).',
          'b) Formulaire de demande de licence B2B : Les coordonnées professionnelles et informations de projet saisies sont traitées afin d’étudier la faisabilité du partenariat et d’établir les accords nécessaires.',
        ],
      },
      {
        title: '4. Base Juridique du Traitement',
        content: [
          'Le traitement des demandes de licence repose sur l’exécution de mesures précontractuelles prises à la demande de l’intéressé (Art. 6, par. 1, point b du RGPD).',
        ],
      },
      {
        title: '5. Absence de Traceurs Publicitaires et Non-Transmission',
        content: [
          'Aucune donnée n’est cédée à des tiers à des fins promotionnelles. Le site fonctionne sans cookies tiers invasifs.',
        ],
      },
      {
        title: '6. Vos Droits en vertu du RGPD',
        content: [
          'Vous disposez des droits d’accès, de rectification, d’effacement, de limitation du traitement, de portabilité et d’opposition conformément aux articles 15 à 21 du RGPD.',
          'Contact : info@kamoflash-recordz.com',
        ],
      },
    ],
    closeBtn: 'Fermer la Politique de Confidentialité',
  },
};
