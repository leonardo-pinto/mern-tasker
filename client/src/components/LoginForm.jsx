function LoginForm() {
    return (
        <>
            <form style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '300px', margin: 'auto' }}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />

                <br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required style={{ width: '100%', padding: '8px', margin: '8px 0', boxSizing: 'border-box' }} />

                <br />

                <input type="submit" value="Login" style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} />
            </form>
        </>
    );
}

export default LoginForm;
