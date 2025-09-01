import { ClipLoader } from "react-spinners";

function LoaderSpinner({ loading }) {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <ClipLoader
        color="#2dc97a"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={{
          borderWidth: "7px", // 👈 yaha border ka thickness set karo
        }}
      />
    </div>
  );
}

export default LoaderSpinner;
