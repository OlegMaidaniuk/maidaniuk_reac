import Simpson from './components/simpson/Simpson';

const App = () => {
    return (
        <div>
<Simpson name={'Bart'} surname={'Simpson'} age={10} gender={'male'}
         photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
<Simpson name={'Homer'} surname={'Simpson'} age={11} gender={'male'}
         photo={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/16/12/homer-simpson.jpeg?quality=75&width=990&crop=4%3A3%2Csmart&auto=webp'}/>
<Simpson name={`Marge`} surname={'Simpson'} age={12} gender={'female'}
         photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
<Simpson name={'Lisa'} surname={'Simpson'} age={14} gender={'female'}
         photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
<Simpson name={'Maggi'} surname={'Simpson'} age={3} gender={'female'}
         photo={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
};

export default App;