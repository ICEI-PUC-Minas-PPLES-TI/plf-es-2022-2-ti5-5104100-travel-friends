import '@testing-library/jest-dom';
import { getAllRoadmap, createRoadmap } from '../../../services/api/Requests/roadmap';
import { ROADMAP_MOCK, CREATE_ROADMAP_MOCK } from '../../../mock';

describe('', () => {

  it('deve retornar um dado específico', async () => {
    const data = await getAllRoadmap();
    expect(data[0]).toStrictEqual(ROADMAP_MOCK);
  });
  
  it('deve retornar resposta de erro de requisição', async () => {
    expect.assertions(0);
    try {
      await getAllRoadmap();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('', async () => {
    const data = await createRoadmap(CREATE_ROADMAP_MOCK);
    expect(data.request).toBeTruthy();
  })
});