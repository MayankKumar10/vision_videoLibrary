import { useState } from 'react'
import { useAuth, useUserData } from '../context'

export const PlaylistHook = (API, video, action, msg) => {
  const [updatingPlaylist, setUpdatingPlaylist] = useState(false)
  const {userDataDispatch} = useUserData();
  const {auth} = useAuth();

  const playlistUpdatedFunc = async() =>{
    setUpdatingPlaylist(true);
    try{
      const res = await API(video, auth.vision_token)

      if(res.status === 201 || 200){
        msg && console.log(msg) //toast.success(msg)
        setUpdatingPlaylist(false)
        userDataDispatch({
          type: action,
          payload:{ data: res.data},
        })
      }
    }catch(err){
      console.log(err)
      //toast.error('There is a Problem');
    }
  }

  return [playlistUpdatedFunc, updatingPlaylist]
}
