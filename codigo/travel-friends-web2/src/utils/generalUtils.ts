import axios from "axios";

export const SearchCEP = (value: string) => {
    var cep = value.replace(/\D/g, '');
    var validacep = /^[0-9]{8}$/;

    if (cep !== "") {
        if(validacep.test(cep)) {
            const response = axios.get('https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback');
            return response;
        }
        else {
            return "Formato de CEP inválido.";
        }
    };
};