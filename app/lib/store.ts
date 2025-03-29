import { create } from 'zustand'

type Store = {
  name: string;
  email: string;
  password: string;
  userRole: string | null;
  companyName: string | null;
  companyCategory: string | null;
  companySize: string | null;
  invites: [string] | [];
  pricingPlan: string | null;
  mailList: boolean;
  terms: boolean;
};

const useStore = create<Store>((set) => ({
  name: '',
  email: '',
  password: '',
  userRole: null,
  companyName: '',
  companyCategory: null,
  companySize: null,
  invites: [],
  pricingPlan: 'starter',
  mailList: false,
  terms: false,
  setName: (name: string) => set(() => ({ name: name })),
  setEmail: (email: string) => set(() => ({ email: email })),
  setPassword: (password: string) => set(() => ({ password: password })),
  setUserRole: (userRole: string) => set(() => ({ userRole: userRole })),
  setCompanyName: (companyName: string) => set(() => ({ companyName: companyName })),
  setCompanyCategory: (companyCategory: string) => set(() => ({ companyCategory: companyCategory })),
  setCompanySize: (companySize: string) => set(() => ({ companySize: companySize })),
  setInvites: (invites: [string] | []) => set(() => ({ invites: invites })),
  setPricingPlan: (pricingPlan: string) => set(() => ({ pricingPlan: pricingPlan })),
  setMailList: (mailList: boolean) => set(() => ({ mailList: mailList })),
  setTerms: (terms: boolean) => set(() => ({ terms: terms })),
}));

export default useStore;