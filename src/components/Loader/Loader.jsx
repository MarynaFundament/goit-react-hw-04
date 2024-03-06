import { Bars } from 'react-loader-spinner'

const Loader = () => {
    return <div  
        style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
      }}>
          
    <Bars
    height="30"
    width="100"
  
    color="#3f51b5"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
    </div>
}

export default Loader