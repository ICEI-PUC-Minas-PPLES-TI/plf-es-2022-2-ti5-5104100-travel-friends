import '@testing-library/jest-dom';
import { getAllRoadmap, createRoadmap, updateRoadmap } from '../../../services/api/Requests/roadmap';
import { ROADMAP_MOCK, CREATE_ROADMAP_MOCK, UPDATE_ROADMAP_MOCK } from '../../../mock';
import { waitFor } from '@testing-library/react';

describe('Teste de API Passeio', () => {

  it('deve retornar um dado específico', async () => {
    const data = await getAllRoadmap();
    waitFor(() => {
      expect(data[0]).toStrictEqual(ROADMAP_MOCK);
    })
  });
  
  it('deve retornar resposta de erro de requisição', async () => {
    expect.assertions(0);
    try {
      await getAllRoadmap();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('deve retornar dado de criação', async () => {
    const data = await createRoadmap(CREATE_ROADMAP_MOCK);
    waitFor(() => {
      expect(data).toBeTruthy();
    })
  });

  it('deve retornar resposta de erro de para criação', async () => {
    expect.assertions(0);
    try {
      await createRoadmap(CREATE_ROADMAP_MOCK);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it.skip('deve realizar a atualização do passeio', async () => {
    const data = await updateRoadmap(UPDATE_ROADMAP_MOCK);
    waitFor(() => {
      expect(data).toBeTruthy();
    })
  });
});