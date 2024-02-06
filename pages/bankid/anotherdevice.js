import { useRouter } from "next/navigation";
import axios from "axios";

const AnotherDevice = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const response = await axios("/api/auth");
    const token = response.data.accessToken;

    
  }

  return (
    <div>
      <h1>Another Device</h1>

      <button type="button" onClick={handleLogin}>
        Log in
      </button>

      <button type="button" onClick={() => router.back()}>
        Cancel
      </button>
    </div>
  );
}

export default AnotherDevice;