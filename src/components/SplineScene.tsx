import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="spline-loader">
          <div className="spinner" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
