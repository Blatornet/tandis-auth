import { useRouter } from "next/navigation";

const AnotherDevice = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Another Device</h1>

      <button type="button" onClick={() => router.back()}>
        Cancel
      </button>
    </div>
  )
}

export default AnotherDevice;