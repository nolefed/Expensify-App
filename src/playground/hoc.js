import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
<div>
<h1>Info</h1>
<p> The info is :{props.info} </p>
</div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAdmin && <p> This is a private info. please do not share! </p>}
        <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) =>{
    return (props) => (
       <div>
       {props.isAuthentication ? (
        <WrappedComponent {...props} />
       ) : (
        <p> Please login to view the info </p>
       )}
       </div> 
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin = {false} info= "These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {true} info= "These are the details" />, document.getElementById('app'));