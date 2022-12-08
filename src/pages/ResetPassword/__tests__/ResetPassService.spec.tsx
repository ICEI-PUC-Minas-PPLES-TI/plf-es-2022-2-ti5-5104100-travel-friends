import '@testing-library/jest-dom';
import { resetPassword } from '../../../services/api/Requests/login';
import { USER } from '../../../mock';

describe('Teste de API resetar senha', () => {
  it('deve retornar um dado específico', async () => {
    const data = await resetPassword(USER);
    expect(data).not.toBeUndefined();
  });
});