

export const addRemove = async({props}) => {
  
  const {
    setState,
    API,
    product,
    auth,
    status,
    dispatch,
    type,
    payload,
    successTxt,
    errorTxt,
  } = props

  setState(true);
  
  try{
    var res = await API(product, auth.vision_token);
    console.log(res);
    if(res.status === status){
    //	toast.success(`${successTxt}`)
    setState(false);
    
    dispatch({
      type:type,
      payload: {
        payload: res.data.payload}
    })
    
    }
    
  }catch(err){
    console.log('Error AddRemoveFunction', err);
    console.log('res.data.payloadOne',res);
    console.log('dispatch:', dispatch);
  }
}


