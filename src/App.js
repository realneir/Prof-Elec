import { useState } from "react";


const Dashboard = (props) => { // props encapsulate the token and logout method

	const [, setToken] = useState(props ? props.token : ''); // check if props exists. if ys, store the token 
	
	const onLogout = (evt) => {
		const { logout } = props; // deconstruct the object props and extract only the logout method
		setToken('');
		if(logout) {  // check if prop logout exist
			logout(); // if yes, trigger handleLogout method in Login component
		}
	};

	return(
		<>
			<h2>Users Table</h2>
			<table>
        <tr>
          <th>Id </th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td></td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Leanne Graham</td>
          <td>Bret</td>
          <td>Sincere@april.biz</td>
          <td>1-770-736-8031 x56442</td>
          <td><a href='#\' onclick={onLogout}>View Details</a></td>
        </tr>
				{/* <li >user {token}</li>
				<li><a href='#\' onClick={onLogout}>Logout</a></li> */}
        </table>
			{/* <h2>Users</h2>
			<h4>Table here...</h4> */}
		</>
	)
};

export default Dashboard;