import { waitFor } from '@testing-library/react';
import { SearchCEP } from '../generalUtils';

describe('Teste dos métodos do generalUtils', () => {

  it('Teste do searchCEP', async() => {
    const data = await SearchCEP('31370671');
    waitFor(() =>{
      expect(data.data).toHaveProperty('localidade', 'Belo Horizonte');
    })
  });
})