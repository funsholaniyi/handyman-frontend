export interface TestQuestionsModel {
  questionText: string;
  category: string;
  options: TestOptionsModel[];
  publicId?: string;
  testType?: TestTypesModel;
  testTypeId?: string;
}

export interface TestOptionsModel {
  questionId: string;
  optionText: string;
  weight: number;
  publicId?: string;
}

export interface TestTypesModel {
  typeText: string;
  publicId: string;
}

export interface TestAnswers {
  optionId: string;
  questionId: string;
  userId: string;
  publicId: string;
}
