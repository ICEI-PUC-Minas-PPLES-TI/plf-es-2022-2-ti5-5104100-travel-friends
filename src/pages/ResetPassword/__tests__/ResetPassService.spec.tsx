import '@testing-library/jest-dom';
import { resetPassword } from '../../../services/api/Requests/login';
import { USER_MOCK } from '../../../mock';
import { waitFor } from '@testing-library/react';

describe('Teste de API resetar senha', () => {
  it('deve retornar um dado específico', async () => {
    const data = await resetPassword(USER_MOCK);
    waitFor(() => {
      expect(data).not.toBeUndefined();
    })
  });
});