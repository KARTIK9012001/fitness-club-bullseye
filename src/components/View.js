import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({members,deleteMember}) => {
    
    return members.map(member=>(
        
        <tr key={member.phone_number}>
            <td>{member.phone_number}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td className='delete-btn' onClick={()=>deleteMember(member.phone_number)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
