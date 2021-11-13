import { useEffect, useState } from "react";
import { Container } from "./styles";
import {api} from "../../services/api";

interface Transactions{
    id:number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createAt: string,
}

export function TransactionsTable(){

    const [transaction, setTransaction] = useState<Transactions[]>([]);


    useEffect(() => {
        api.get('/transactions').then(response => setTransaction(response.data.transactions))
    },[])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead> 

                <tbody>
                    {transaction.map(transaction => {
                        return(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                        {new  Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR',).format(
                                        new Date(transaction.createAt))}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>   
            </table>            
        </Container>
    )
}