import '@testing-library/jest-dom';
import { registerUser } from '../../../services/api/Requests/login';
import { CREATE_USER_MOCK } from '../../../mock';
import { waitFor } from '@testing-library/react';

describe('Teste de API de criação do usuário', () => {
  it('deve retornar sucesso', async () => {
    const { data } = await registerUser(CREATE_USER_MOCK);
    waitFor(() => {
      expect(data).not.toBeUndefined();
    })
  });
});