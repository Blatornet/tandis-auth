import { useRouter } from "next/navigation";

const SameDevice = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Same Device</h1>

      <button type="button" onClick={() => router.back()}>
        Cancel
      </button>
    </div>
  )
}

export default SameDevice;