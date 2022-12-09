import '@testing-library/jest-dom';
import { loginUser } from '../../../services/api/Requests/login';
import { USER_MOCK } from '../../../mock';
import { waitFor } from '@testing-library/react';

describe('Teste de API login do usuário', () => {
  it('deve retornar sucesso', async () => {
    const { status } = await loginUser(USER_MOCK);
    waitFor(() => {
      expect(status).not.toBeNull();
    })
  });
});