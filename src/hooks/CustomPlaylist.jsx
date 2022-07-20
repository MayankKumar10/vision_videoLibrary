import{ useState } from 'react'
import { useAuth, useUserData } from '../context';

export const CustomPlaylist = (
  API,
  playlist,
  action,
  msg,
  video = null
) => {
  const [updatePlaylist, setUpdatePlaylist] = useState(false);
  const {userDataDispatch} = useUserData()
  const {auth} = useAuth();
  const customPlaylistCall = async () =>{
    setUpdatePlaylist(true);

    try{
      let res;
      if(video){
        res = await API(playlist, video, auth.vision_token);
      }else{
        res = await API(playlist, auth.vision_token);
      }

      if(res.status === 201 || 200){
        //toast.success(msg)
        console.log(msg);
        setUpdatePlaylist(false);       
  
        userDataDispatch({
          type: action,
          payload: {data: res.data},
        });
      }

    }catch(err){
      console.log(`error in ${API}`)
      console.log(err)
      //toast.error('There, is Some Problem');
    }
  }
  return [customPlaylistCall, updatePlaylist];
}

