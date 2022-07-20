import { useState } from 'react'
import { useAuth, useUserData } from '../context'

export const NotesHook = (serviceFunction, video, msg, action, note) => {
  const {userDataDispatch} = useUserData();
  const [updateNotes, setUpdateNotes] = useState(false);
  const {auth} = useAuth();
  const notesUpdate = async()=>{
    setUpdateNotes(true);
    try{
      const res = await serviceFunction(video, note, auth.vision_token);

      if(res.status === 201 || 200){
        msg && console.log(msg) //toast.success(msg)
        setUpdateNotes(false);
        userDataDispatch({
          type: action,
          payload:{data: res.data},
        })
      }
    }catch(err){
      console.log('There was a problem');
    }
  }


  return [NotesHook, updateNotes ]
}
