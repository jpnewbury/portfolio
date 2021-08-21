import React from "react";

export default function dribble(props) {
  return (
    <svg viewBox="0 0 50 50" className={props.style}>
      {" "}
      <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 26.169922 11 C 28.139922 11 30 12.77 30 21.5 C 30 24.62 29.469141 29.150859 27.619141 32.880859 C 28.419141 33.920859 29.22 34.25 29.75 34 C 31.25 33.28 32.209375 30.750234 33.109375 27.990234 C 33.359375 27.240234 34.190937 26.830547 34.960938 27.060547 C 35.740938 27.300547 36.179688 28.099844 35.929688 28.839844 C 35.169688 31.179844 33.040312 36.980469 29.820312 36.980469 C 28.800313 36.980469 27.429141 36.940156 26.119141 35.660156 C 24.649141 37.660156 22.820391 39 20.650391 39 C 16.060391 39 14 35.510781 14 32.050781 C 14 28.380781 15.880859 24.050781 20.130859 24.050781 C 20.850859 24.050781 21.510078 24.180859 22.080078 24.380859 C 22.000078 23.380859 22 22.580859 22 21.380859 C 22 21.270859 22.039922 11 26.169922 11 z M 26.289062 14.050781 C 25.679062 15.090781 24.960938 18.129141 24.960938 21.369141 C 24.960938 24.889141 25.370234 27.589844 25.990234 29.589844 C 26.920234 27.019844 27.039062 24.03 27.039062 21.5 C 27.039062 16.74 26.759062 14.710781 26.289062 14.050781 z M 20.119141 27 C 16.939141 27 17 31.929141 17 32.119141 C 17 33.359141 17.289141 36 20.619141 36 C 21.899141 36 23.200781 34.979687 24.300781 33.179688 C 23.630781 31.929688 23.000078 29.97 22.580078 28 C 22.500078 27.94 22.419609 27.880547 22.349609 27.810547 C 22.349609 27.810547 21.379141 27 20.119141 27 z"></path>
    </svg>
  );
}