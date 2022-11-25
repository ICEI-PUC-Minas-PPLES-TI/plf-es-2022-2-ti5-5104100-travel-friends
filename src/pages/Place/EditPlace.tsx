import React, { useState } from 'react';
import { Navigation } from '../../components';
import { Container, Row,Col, Form, Button } from 'react-bootstrap';
import { ILocation, Local } from '../../@types/models.interface';
import { SearchCEP } from '../../utils/generalUtils';
import InputTime from '../../components/InputTime/InputTime';
import { userHook } from '../../context/userData';
import { createPlace } from '../../services/api/Requests/places';


const EditPlace = (data?: any) => {
    const [values, setValues] = useState<Local>({} as Local);
    const [number, setNumber] = useState('');
    const [endereco, setEndereco] = useState("");
    const [location, setLocation] = useState<ILocation>({} as ILocation);
    const [address, setAddress] = useState({
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: '',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: ''
    });
    const [validated, setValidated] = useState(false);
  
    const { userData } = userHook();

    const onSubmit = async(e:any) => {
        e.preventDefault();
        values.address = `${number}, ${endereco}`;
        values.idCriador = userData.id;
        values.location = location;
        setValues({...values});
        console.log(values);
        const res = await createPlace(values);
    }

    const onFocusHandler = (e: any) => {
        console.log("hello there you entered :  my name is ", e.target.name);
    }
 
    const onBlurHandler = (e: any) => {
        console.log("you left ");
    }
    
    return (
      <></>      
    );
}

export default EditPlace;
