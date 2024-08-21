import Button from "../Button/Button";

export default function Modal(){
    
    return(
        <div className="Modal">

               <h1>Descreva sua tarefa</h1>

               <div type='text' className="ModalInput" placeholder = "Exemplo de descricao"/>

               <Button className="ModalButton"/>
        </div>
    )
    };
