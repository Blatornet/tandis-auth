import { useRouter } from "next/navigation";

const Start = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Bank-ID</h1>

      <button type="button" onClick={() => router.push('/bankid/anotherdevice')}>
        Log on using another device
      </button>

      <p>Or</p>

      <button type="button" onClick={() => router.push('/bankid/samedevice')}>
        Log on using same device
      </button>

    </div>
  )
}

export default Start;