export type ResponseTemplate = {
  id: string;
  category: "mining" | "consultancy" | "partnership" | "technology" | "governance" | "general";
  title: string;
  subject: string;
  body: string;
};

export const responseTemplates: ResponseTemplate[] = [
  // Mining Templates
  {
    id: "mining-initial",
    category: "mining",
    title: "Mining Inquiry - Initial Response",
    subject: "Re: {subject}",
    body: `Dear {name},

Thank you for your inquiry regarding mining and resource development opportunities with Resource Pakistan (Pvt) Ltd.

We appreciate your interest in our mining services. Our team specializes in comprehensive feasibility studies, compliance-oriented planning, and value-chain analysis for responsible mineral development.

To better assist you, we would like to schedule a preliminary consultation to discuss:
- Project scope and objectives
- Geological assessment requirements
- Regulatory compliance framework
- Timeline and resource allocation

Please let us know your availability for a meeting in the coming week, or feel free to provide additional details about your specific requirements.

Best regards,
Resource Pakistan Team`,
  },
  {
    id: "mining-feasibility",
    category: "mining",
    title: "Mining Feasibility Study Request",
    subject: "Re: Feasibility Study - {subject}",
    body: `Dear {name},

Thank you for your interest in our mining feasibility study services.

Resource Pakistan conducts comprehensive feasibility assessments covering:
- Geological and mineral resource evaluation
- Environmental impact assessment
- Economic viability analysis
- Regulatory compliance review
- Infrastructure and logistics planning

Our team will review your project details and prepare a preliminary scope of work with timeline and cost estimates. We typically require 2-3 weeks for initial assessment.

We will contact you within 48 hours to discuss next steps.

Best regards,
Resource Pakistan Team`,
  },

  // Consultancy Templates
  {
    id: "consultancy-initial",
    category: "consultancy",
    title: "Consultancy Inquiry - Initial Response",
    subject: "Re: {subject}",
    body: `Dear {name},

Thank you for reaching out to Resource Pakistan regarding our consultancy and advisory services.

We provide strategic planning and advisory services for government bodies, institutional stakeholders, and private sector organizations. Our expertise spans policy frameworks, operational execution, and long-term industrial planning.

To provide you with the most relevant information, we would appreciate additional details about:
- Nature of the consultancy requirement
- Project timeline and deliverables
- Stakeholder involvement
- Specific policy or operational challenges

We look forward to exploring how we can support your objectives.

Best regards,
Resource Pakistan Team`,
  },
  {
    id: "consultancy-proposal",
    category: "consultancy",
    title: "Consultancy Proposal Request",
    subject: "Re: Proposal Request - {subject}",
    body: `Dear {name},

Thank you for your interest in engaging Resource Pakistan for consultancy services.

We have received your request and our team is reviewing the requirements. We will prepare a detailed proposal outlining:
- Scope of work and deliverables
- Methodology and approach
- Timeline and milestones
- Resource allocation
- Fee structure

You can expect to receive our proposal within 5-7 business days. If you have any urgent requirements or additional information to share, please feel free to contact us.

Best regards,
Resource Pakistan Team`,
  },

  // Partnership Templates
  {
    id: "partnership-initial",
    category: "partnership",
    title: "Partnership Inquiry - Initial Response",
    subject: "Re: Partnership Opportunity - {subject}",
    body: `Dear {name},

Thank you for your interest in exploring partnership opportunities with Resource Pakistan (Pvt) Ltd.

We are always open to strategic collaborations that align with our mission of advancing Pakistan's resource development and industrial capabilities. We value partnerships that bring complementary expertise, shared values, and long-term commitment.

To evaluate potential synergies, we would like to learn more about:
- Your organization's core competencies
- Areas of potential collaboration
- Strategic objectives and timeline
- Expected outcomes and mutual benefits

We would be pleased to schedule an introductory meeting to discuss this further.

Best regards,
Resource Pakistan Team`,
  },

  // Technology Templates
  {
    id: "technology-ev",
    category: "technology",
    title: "Electric Vehicle Inquiry",
    subject: "Re: EV Technology - {subject}",
    body: `Dear {name},

Thank you for your inquiry regarding our electric vehicle and technology initiatives.

Resource Pakistan is actively involved in advancing electric mobility and industrial technology solutions aligned with Pakistan's sustainable development goals. Our work encompasses technology assessment, infrastructure planning, and policy alignment.

We would be happy to discuss:
- EV infrastructure development
- Technology transfer opportunities
- Policy and regulatory frameworks
- Investment and partnership models

Please let us know your specific areas of interest and we can arrange a detailed discussion.

Best regards,
Resource Pakistan Team`,
  },

  // Governance Templates
  {
    id: "governance-policy",
    category: "governance",
    title: "Governance & Policy Inquiry",
    subject: "Re: Governance Inquiry - {subject}",
    body: `Dear {name},

Thank you for your inquiry regarding governance, transparency, and policy engagement.

Resource Pakistan maintains strong commitments to institutional accountability, regulatory compliance, and stakeholder engagement. We work closely with government bodies and policy institutions to ensure alignment with national development priorities.

We would be pleased to provide additional information about:
- Our governance framework
- Compliance and reporting mechanisms
- Stakeholder engagement processes
- Policy alignment initiatives

Please let us know how we can assist you further.

Best regards,
Resource Pakistan Team`,
  },

  // General Templates
  {
    id: "general-acknowledgment",
    category: "general",
    title: "General Inquiry - Acknowledgment",
    subject: "Re: {subject}",
    body: `Dear {name},

Thank you for contacting Resource Pakistan (Pvt) Ltd.

We have received your inquiry and our team will review it carefully. We aim to respond to all inquiries within 2-3 business days.

If your matter is urgent, please feel free to call our office during business hours (Monday-Friday, 9:00 AM - 5:00 PM PKT).

We appreciate your interest in Resource Pakistan and look forward to assisting you.

Best regards,
Resource Pakistan Team`,
  },
  {
    id: "general-information",
    category: "general",
    title: "General Information Request",
    subject: "Re: Information Request - {subject}",
    body: `Dear {name},

Thank you for your interest in Resource Pakistan (Pvt) Ltd.

We are a strategic development organization operating across mining, consultancy, electric vehicles, and industrial technology sectors. Our work focuses on feasibility-driven projects that create sustainable value for Pakistan's economy.

For detailed information about our services and capabilities, please visit our website or contact us directly. We would be happy to arrange a meeting to discuss your specific interests.

Best regards,
Resource Pakistan Team`,
  },
];

/**
 * Get templates by category
 */
export function getTemplatesByCategory(category: ResponseTemplate["category"]): ResponseTemplate[] {
  return responseTemplates.filter((t) => t.category === category);
}

/**
 * Get template by ID
 */
export function getTemplateById(id: string): ResponseTemplate | undefined {
  return responseTemplates.find((t) => t.id === id);
}

/**
 * Replace placeholders in template
 */
export function fillTemplate(
  template: ResponseTemplate,
  data: {
    name: string;
    subject: string;
    organization?: string;
    [key: string]: string | undefined;
  }
): { subject: string; body: string } {
  let subject = template.subject;
  let body = template.body;

  // Replace placeholders
  Object.entries(data).forEach(([key, value]) => {
    if (value) {
      const placeholder = `{${key}}`;
      subject = subject.replace(new RegExp(placeholder, "g"), value);
      body = body.replace(new RegExp(placeholder, "g"), value);
    }
  });

  return { subject, body };
}
