import { useEffect, useState } from 'react';

export default function Profile({ session }) {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      const user = supabase.auth.user();
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function updateProfile() {
    try {
      const user = supabase.auth.user();
      const updates = {
        id: user.id,
        username,
        updated_at: new Date(),
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='container mx-auto grid place-content-center min-h-screen'>
      <p>Oh hi there {session.user.email}</p>
      <input
        className='my-4 border-2 border-gray-500 rounded-xl p-4 w-full'
        type='username'
        placeholder='Enter a username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          updateProfile();
        }}
        className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
      >
        <span>Update profile</span>
      </button>
      <p className='mt-4 text-center'>or</p>
      <button
        className='mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'
        onClick={() => supabase.auth.signOut()}
      >
        Logout
      </button>
    </div>
  );
}