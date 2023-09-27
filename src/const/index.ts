export const ACCORDION_GROUP_ID = "accordionGroup";
export const ACCORDIONS_TRIGGERS = [
  {
    id: "accordion1id",
    title: "Personal Information",
    expand: false,
    section: {
      id: "section1",
      inputs: [{ id: "cufc1", label: "Name", name: "name" }],
    },
  },
  {
    id: "accordion2id",
    title: "Billing Address",
    expand: false,
    section: {
      id: "section2",
      inputs: [{ id: "b-add1", label: "Address1", name: "b-add1" }],
    },
  },
] as const;
