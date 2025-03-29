import { create } from 'zustand'

type OptionType = {
  value: string;
  label: string;
};

type Store = {
  name: string;
  email: string;
  password: string;
  userRole: OptionType | null;
  companyName: string | null;
  companyCategory: OptionType | null;
  companySize: OptionType | null;
  invites: string[];
  pricingPlan: string | null;
  mailList: boolean;
  terms: boolean;
  setName: (name: string)  => void
  setEmail: (email: string)  => void
  setPassword: (password: string) => void
  setUserRole: (userRole: OptionType) => void
  setCompanyName: (companyName: string) => void
  setCompanyCategory: (companyCategory: OptionType) => void
  setCompanySize: (companySize: OptionType) => void
  setInvites: (invites: string[]) => void
  setPricingPlan: (pricingPlan: string) => void
  setMailList: (mailList: boolean) => void
  setTerms: (terms: boolean) => void
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
  setUserRole: (userRole: OptionType) => set(() => ({ userRole: userRole })),
  setCompanyName: (companyName: string) => set(() => ({ companyName: companyName })),
  setCompanyCategory: (companyCategory: OptionType) => set(() => ({ companyCategory: companyCategory })),
  setCompanySize: (companySize: OptionType) => set(() => ({ companySize: companySize })),
  setInvites: (invites: string[]) => set(() => ({ invites: invites })),
  setPricingPlan: (pricingPlan: string) => set(() => ({ pricingPlan: pricingPlan })),
  setMailList: (mailList: boolean) => set(() => ({ mailList: mailList })),
  setTerms: (terms: boolean) => set(() => ({ terms: terms })),
}));

export default useStore;