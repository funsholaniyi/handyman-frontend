import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EndPoints, rootEndPoint } from '../constants/endpoints.constant';
import { APIResponseModel } from '../models/api-response.model';
import { TestQuestionsModel, TestTypesModel } from '../models/psychometric-tests.model';

@Injectable({
  providedIn: 'root'
})
export class PsychometricTestsService {

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<TestQuestionsModel[]> {
    const endpoint = rootEndPoint + EndPoints.pTestEndpoint + 'questions';
    return this.http.get<TestQuestionsModel[]>(endpoint);
  }

  getTestTypes(): Observable<TestTypesModel[]> {
    const endpoint = rootEndPoint + EndPoints.pTestEndpoint + 'types';
    return this.http.get<TestTypesModel[]>(endpoint);
  }

  createTestQuestion(data: TestQuestionsModel): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + EndPoints.pTestEndpoint + 'questions';
    return this.http.post<APIResponseModel>(endpoint, data);
  }

  deleteQuestion(questionId: string): Observable<APIResponseModel> {
    const endpoint = rootEndPoint + EndPoints.pTestEndpoint + 'questions/' + questionId;
    return this.http.delete<APIResponseModel>(endpoint);
  }
}
