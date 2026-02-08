export interface Restaurant {
  id: string;
  name: string;
  catchphrase: string;
  description: string; // Used for the intro summary
  priceLevel: string;
  atmosphere: string;
  useCase: string;
  imgUrl: string;
  isClient: boolean; // True for Cadet
  features: string[]; // Short tags
  reasonsToChoose: string[];
  reasonsNotToChoose: string[]; // For filtering personas
  
  // New detailed fields
  detailedFeatures: {
    title: string;
    description: string;
    img?: string; // Image for specific feature
  }[];
  courseInfo: string;
  courseImg?: string; // Image for course section
  atmosphereDetail: string;
  atmosphereImg?: string; // Image for atmosphere section
  
  // Table Info
  basicInfo: {
    address: string;
    access: string;
    hours: string;
    closingDay: string;
    seats: string;
    cards?: string;
    dressCode?: string;
  };
}

export interface Persona {
  name: string;
  age: number;
  occupation: string;
  income: string;
  currentStatus: string; // Relationship status context
  psychographics: {
    values: string;
    fears: string; // What are they afraid of happening on the date?
    desires: string; // What is the ultimate goal of the night?
  };
  behavior: {
    searchKeywords: string[];
    webBrowsingHabits: string[];
  };
  scenario: string; // The specific "Night" story
  matchReason: string;
}

export enum ViewMode {
  STRATEGY = 'STRATEGY',
  PROTOTYPE = 'PROTOTYPE'
}