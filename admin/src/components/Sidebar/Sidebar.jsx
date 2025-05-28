import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className="sidebar-option">
            <NavLink to='/add' className="sidebar-options">
                <img src="https://imgs.search.brave.com/fEtaFQNcKqNwfrPGjxaYlVNZJYKTzIau2hNuLdDIxMo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vcVpzUDJD/V0U1ekpvckJvQUU1/Y1JvSnd3ekFSUk1U/a1c5M0V4VGVlc0Vv/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc0dS9hV052Ym5O/amIzVjBMbU52L2JT/OXBZMjl1TDJaeVpX/VXYvY0c1bkxUSTFO/aTltY21WbC9MV0Zr/WkMxcFkyOXVMV1J2/L2QyNXNiMkZrTFds/dUxYTjIvWnkxd2Jt/Y3RaMmxtTFdacC9i/R1V0Wm05eWJXRjBj/eTB0L1kybHlZMnhs/TFc1dmRtRXQvY0dG/amF5MXZkWFJzYVc1/bC9MVzFwYzJObGJH/eGhibVZ2L2RYTXRh/V052Ym5NdE5EVXgv/TVRZNExuQnVaejlt/UFhkbC9ZbkFtZHow/eE1qZw.jpeg" alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/List' className="sidebar-options">
                <img src="https://imgs.search.brave.com/2CY4bEMVCBOJ5ZO6cZIMM4eHri6XfNUBfKvr1LjmSCE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vMm1NTGRS/T1dWZzdfY05GVlBv/Ylh1X3pReHFkSThv/TTFzLU1Remczanht/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/Wkc0dC9hV052Ym5N/dGNHNW5MbVp5L1pX/VndhV3N1WTI5dEx6/STEvTmk4eE5UQXhN/aTh4TlRBeC9NamMw/TUM1d2JtY19jMlZ0/L2REMWhhWE5mYUhs/aWNtbGs.jpeg" alt="" />
                <p>List Items</p>
             </NavLink>
             <NavLink to='/Order' className="sidebar-options">
                <img src="https://imgs.search.brave.com/obEzgoYoghMoF5N7BAzaVDhwD2tKgnXOpnx-V30eaw8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRkt6U2x4/eXVROXdZZkJjUWZO/OHZPVGJMRnpUTlBI/RzZKNGlabUR5QjdW/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkx/ZUhkcC9ibWN1WTI5/dEwzZHdMV052L2Ju/UmxiblF2ZEdobGJX/VnovTDNWNGQybHVa/eTlrYjNkdS9iRzlo/WkM5bExXTnZiVzFs/L2NtTmxMV04xY25K/bGJtTjUvTFhOb2Iz/QndhVzVuTDJGay9a/QzFwZEdWdExXbHVM/V05oL2NuUXRZMjlz/YjNJdGFXTnYvYmk1/emRtYw.jpeg" alt="" />
                <p>Orders</p>
             </NavLink> 
        </div>
    </div>
  )
}

export default Sidebar

