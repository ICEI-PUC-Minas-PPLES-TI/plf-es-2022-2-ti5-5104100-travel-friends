import '@testing-library/jest-dom';
import { createPlace, getAllPlaces, getPlace, deletePlace, updatePlace } from '../../../services/api/Requests/places';
import { CREATE_PLACE_MOCK } from '../../../mock';
import { waitFor } from '@testing-library/react';

describe('Teste de API Passeio', () => {
  const idLocal = '637d7f6afc4f9fbc3c7e84a6';
  
  it('deve retornar um sucesso', async () => {
    const { status } = await createPlace(CREATE_PLACE_MOCK);
    waitFor(() => {
      expect(status).not.toBeNull();
    })
  });
  
  it('deve retornar resposta de erro de tentativa de criação', async () => {
    expect.assertions(0);
    try {
      await createPlace(CREATE_PLACE_MOCK);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('deve retornar todos os locais', async () => {
    const data = await getAllPlaces();
    waitFor(() => {
      expect(data).toBeTruthy();
    })
  });

  it('deve retornar resposta de erro na requisição', async () => {
    expect.assertions(0);
    try {
      await getAllPlaces();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it('deve realizar a atualização do passeio', async () => {
    const data = await getPlace(idLocal);
    waitFor(() => {
      expect(data).toHaveProperty('_id', idLocal);
    })
  });

  it('deve retornar resposta de erro na requisição de buscar o local requerido', async () => {
    expect.assertions(0);
    try {
      await getPlace(idLocal);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  it.skip('deve retornar mensagem de erro ao tentar deletar um local', async () => {
    const { status } = await deletePlace('1');
    waitFor(() => {
      expect(status).toBeUndefined();
    })
  });

  it('deve retornar resposta de erro na requisição', async () => {
    expect.assertions(0);
    try {
      await deletePlace('2185fd9d5g4g');
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});