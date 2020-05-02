import React from "react"
import { violet } from "../theme/variables"

const Icons = {
	backward2: "M18 5v10l10-10v22l-10-10v10l-11-11z",
	facebook2: "M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z",
	forward3: "M16 27v-10l-10 10v-22l10 10v-10l11 11z",
	linkedin: "M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z",
	linkedin2: ["M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z", "M2 12h6v18h-6v-18z", "M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"],
	mail: "M26.666 0h-21.332c-2.934 0-5.334 2.4-5.334 5.333v21.333c0 2.934 2.4 5.334 5.334 5.334h21.332c2.936 0 5.334-2.4 5.334-5.334v-21.333c0-2.934-2.398-5.333-5.334-5.333zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.864-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z",
	minus: "M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z",
	pause2: "M4 4h10v24h-10zM18 4h10v24h-10z",
	play3: "M6 4l20 12-20 12z",
	plus: "M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z",
	stop2: "M4 4h24v24h-24z",
	volumehigh: ["M27.814 28.814c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.739-2.739 4.247-6.38 4.247-10.253s-1.508-7.514-4.247-10.253c-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c3.305 3.305 5.126 7.7 5.126 12.374s-1.82 9.069-5.126 12.374c-0.293 0.293-0.677 0.439-1.061 0.439zM22.485 25.985c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 4.094-4.094 4.094-10.755 0-14.849-0.586-0.586-0.586-1.536 0-2.121s1.536-0.586 2.121 0c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546c-0.293 0.293-0.677 0.439-1.061 0.439v0zM17.157 23.157c-0.384 0-0.768-0.146-1.061-0.439-0.586-0.586-0.586-1.535 0-2.121 2.534-2.534 2.534-6.658 0-9.192-0.586-0.586-0.586-1.536 0-2.121s1.535-0.586 2.121 0c3.704 3.704 3.704 9.731 0 13.435-0.293 0.293-0.677 0.439-1.061 0.439z", "M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"],
	volumemute2: ["M30 19.348v2.652h-2.652l-3.348-3.348-3.348 3.348h-2.652v-2.652l3.348-3.348-3.348-3.348v-2.652h2.652l3.348 3.348 3.348-3.348h2.652v2.652l-3.348 3.348 3.348 3.348z", "M13 30c-0.26 0-0.516-0.102-0.707-0.293l-7.707-7.707h-3.586c-0.552 0-1-0.448-1-1v-10c0-0.552 0.448-1 1-1h3.586l7.707-7.707c0.286-0.286 0.716-0.372 1.090-0.217s0.617 0.519 0.617 0.924v26c0 0.404-0.244 0.769-0.617 0.924-0.124 0.051-0.254 0.076-0.383 0.076z"],
	youtube: "M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z",
	youtube2: ["M10.75 5.294c0.007-0.027 0.011-0.046 0.012-0.056l0.033-0.236-1.48-0.008c-1.337-0.008-1.746 0-1.783 0.034-0.018 0.016-0.479 1.77-1.302 4.946-0.392 1.515-0.723 2.725-0.734 2.689s-0.481-1.766-1.044-3.843c-0.563-2.078-1.034-3.789-1.048-3.803-0.019-0.019-1.812-0.028-3.263-0.016-0.21 0.002-0.327-0.41 1.876 6.598 0.305 0.97 0.762 2.344 1.015 3.052 0.292 0.817 0.5 1.448 0.642 1.974 0.251 1.002 0.26 1.63 0.205 2.363-0.063 0.847-0.073 6.826-0.011 6.926 0.047 0.077 2.851 0.112 3.116 0.040 0.042-0.012 0.071-0.053 0.090-0.279 0.066-0.194 0.071-0.968 0.071-4.18v-4.103l0.179-0.566c0.117-0.37 0.413-1.344 0.656-2.163s0.538-1.801 0.654-2.18c1.057-3.447 2.067-6.838 2.094-7.032l0.022-0.158z", "M26.441 10.27l-0.001 0.214-0.033 0-0.019 5.906-0.018 5.726-0.458 0.467c-0.513 0.522-0.925 0.722-1.297 0.629-0.405-0.102-0.395 0.056-0.429-6.712l-0.031-6.23h-2.947v0.214h-0.034v6.759c0 7.242-0 7.237 0.367 7.965 0.293 0.579 0.719 0.861 1.45 0.958h0c0.962 0.128 2-0.308 2.962-1.244l0.418-0.407v0.701c0 0.606 0.017 0.706 0.127 0.737 0.18 0.050 2.412 0.053 2.653 0.004l0.2-0.041v-0.207l0.034-0.007v-15.472l-2.944 0.039z", "M18.965 13.323c-0.279-1.198-0.802-2.004-1.664-2.561-1.353-0.875-2.897-0.967-4.331-0.259-1.045 0.516-1.717 1.372-2.065 2.628-0.041 0.15-0.072 0.275-0.095 0.463-0.088 0.443-0.099 1.105-0.122 4.186-0.035 4.748 0.019 5.313 0.614 6.391 0.583 1.058 1.794 1.833 3.112 1.993 0.397 0.048 1.201-0.027 1.663-0.155 1.051-0.291 2.058-1.122 2.504-2.065 0.192-0.407 0.309-0.691 0.379-1.208 0.13-0.707 0.14-1.849 0.14-4.762-0-3.715-0.012-4.121-0.136-4.651zM15.604 23c-0.247 0.188-0.679 0.27-1.031 0.195-0.271-0.058-0.636-0.482-0.748-0.869-0.14-0.482-0.151-7.187-0.030-8.502 0.199-0.658 0.756-1.002 1.364-0.838 0.474 0.128 0.716 0.424 0.854 1.046 0.103 0.461 0.115 1.035 0.093 4.414-0.014 2.241-0.022 3.336-0.096 3.924-0.074 0.371-0.197 0.47-0.407 0.63z", "M71.887 16.692h1.424l-0.023-1.29c-0.022-1.183-0.039-1.319-0.198-1.64-0.249-0.507-0.617-0.731-1.201-0.731-0.701 0-1.146 0.339-1.356 1.036-0.089 0.296-0.183 2.334-0.116 2.51 0.038 0.098 0.241 0.116 1.469 0.116z", "M62.369 13.757c-0.19-0.383-0.543-0.571-0.954-0.556-0.319 0.011-0.674 0.146-1.015 0.407l-0.254 0.193v9.269l0.254 0.193c0.576 0.439 1.209 0.532 1.644 0.241 0.172-0.115 0.285-0.274 0.372-0.527 0.114-0.329 0.124-0.75 0.109-4.649-0.015-4.064-0.024-4.303-0.157-4.57z", "M80.027 9.582c-0.284-3.401-0.509-4.505-1.211-5.923-0.929-1.878-2.272-2.868-4.184-3.086-1.478-0.168-7.041-0.405-12.189-0.52-8.912-0.198-23.564 0.183-25.436 0.662-0.865 0.221-1.513 0.597-2.188 1.269-1.183 1.177-1.887 2.865-2.17 5.2-0.647 5.331-0.66 11.773-0.037 17.297 0.268 2.376 0.82 3.92 1.857 5.192 0.647 0.794 1.761 1.469 2.758 1.67 0.7 0.141 4.201 0.337 9.3 0.521 0.76 0.027 2.771 0.074 4.47 0.105 3.541 0.063 10.051 0.026 13.772-0.079 2.504-0.070 7.069-0.255 7.922-0.321 0.24-0.019 0.796-0.054 1.236-0.079 1.477-0.083 2.417-0.393 3.3-1.086 1.142-0.897 2.027-2.556 2.4-4.501 0.354-1.84 0.59-5.118 0.638-8.839 0.040-3.109-0.013-4.787-0.238-7.482zM44.54 8.35l-1.656 0.020-0.073 17.661-1.435 0.018c-1.11 0.015-1.447-0.001-1.474-0.073-0.019-0.051-0.042-4.032-0.052-8.849l-0.018-8.758-3.234-0.041v-2.76l9.557 0.039 0.041 2.721-1.656 0.020zM54.694 18.472v7.595h-2.616v-0.799c0-0.601-0.023-0.799-0.093-0.799-0.051 0-0.288 0.198-0.527 0.441-0.517 0.526-1.13 0.949-1.653 1.145-1.083 0.405-2.112 0.169-2.551-0.586-0.401-0.691-0.409-0.845-0.409-8.010v-6.58h2.614l0.020 6.196c0.019 6.088 0.022 6.2 0.168 6.448 0.193 0.329 0.488 0.417 0.956 0.288 0.276-0.076 0.464-0.21 0.911-0.654l0.563-0.561v-11.717h2.616v7.595zM64.899 24.982c-0.23 0.513-0.744 1.016-1.165 1.14-1.099 0.324-1.98 0.060-2.998-0.897-0.316-0.297-0.61-0.538-0.654-0.538-0.053 0-0.082 0.233-0.082 0.69v0.69h-2.616v-20.495h2.616v3.343c0 1.839 0.025 3.343 0.054 3.343s0.306-0.244 0.613-0.541c0.707-0.683 1.298-0.981 2.049-1.038 1.338-0.101 2.135 0.587 2.501 2.16 0.114 0.491 0.125 1.051 0.125 5.596-0 5.537-0.001 5.56-0.443 6.546zM75.968 21.943c-0.023 0.57-0.092 1.223-0.154 1.454-0.364 1.349-1.332 2.304-2.732 2.696-1.885 0.527-3.96-0.337-4.788-1.994-0.465-0.93-0.481-1.116-0.481-5.662 0-3.707 0.013-4.162 0.132-4.667 0.336-1.431 1.168-2.357 2.578-2.871 0.408-0.149 0.835-0.225 1.261-0.234 1.521-0.031 3.031 0.787 3.663 2.119 0.427 0.899 0.48 1.283 0.522 3.816l0.039 2.271-5.578 0.039-0.020 1.526c-0.029 2.153 0.116 2.815 0.697 3.207 0.489 0.329 1.24 0.305 1.649-0.055 0.383-0.337 0.491-0.698 0.529-1.753l0.034-0.927h2.694l-0.043 1.036z"],
	react: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
	nodejs: ["M271.821.383a2.181 2.181 0 0 0-1.08.287 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.251 1.024-.719 1.295a1.501 1.501 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0l-35.903 20.721c-1.342.775-2.158 2.264-2.158 3.814v41.443c0 1.548.817 2.966 2.158 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.308 4.308 0 0 0 2.159-3.741V16.356a4.386 4.386 0 0 0-2.23-3.814L272.9.598c-.335-.187-.707-.22-1.079-.215zM40.861 52.115c-.684.027-1.328.147-1.942.503L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.929 132.7c0 .773.399 1.492 1.079 1.87a2.096 2.096 0 0 0 2.159 0l21.297-12.231c1.349-.802 2.23-2.196 2.23-3.742V92.623c0-1.55.815-2.972 2.159-3.742l9.065-5.252a4.251 4.251 0 0 1 2.159-.576c.74 0 1.5.185 2.158.576l9.066 5.252a4.296 4.296 0 0 1 2.159 3.742v25.973c0 1.546.89 2.95 2.23 3.742l21.297 12.232a2.096 2.096 0 0 0 2.159 0 2.164 2.164 0 0 0 1.08-1.871l.07-55.618a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.475-1.942-.503h-.432zm322.624.503c-.75 0-1.485.19-2.158.576l-35.903 20.722a4.306 4.306 0 0 0-2.159 3.741V119.1c0 1.559.878 2.971 2.23 3.742l35.616 20.29c1.315.75 2.921.807 4.245.07l21.585-12.015c.685-.38 1.148-1.09 1.151-1.87a2.126 2.126 0 0 0-1.079-1.871l-36.119-20.722c-.676-.386-1.151-1.167-1.151-1.943v-12.95c0-.775.48-1.485 1.151-1.871l11.224-6.476a2.155 2.155 0 0 1 2.159 0L375.5 89.96a2.152 2.152 0 0 1 1.08 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.389 1.487.39 2.158 0L401.331 91.4a4.325 4.325 0 0 0 2.159-3.742v-10c0-1.545-.82-2.966-2.159-3.742l-35.687-20.722a4.279 4.279 0 0 0-2.159-.575zm-107.35 30.939c.188 0 .408.046.576.143l12.304 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.936l-12.304 7.123a1.088 1.088 0 0 1-1.079 0l-12.303-7.123c-.335-.194-.576-.549-.576-.936V91.758c0-.386.242-.74.576-.935l12.303-7.122a.948.948 0 0 1 .504-.143v-.001z", "M148.714 52.402c-.748 0-1.488.19-2.158.576l-35.903 20.65c-1.343.773-2.159 2.265-2.159 3.813v41.443c0 1.55.817 2.966 2.159 3.742l35.903 20.721a4.297 4.297 0 0 0 4.317 0l35.903-20.721a4.308 4.308 0 0 0 2.158-3.742V77.441c0-1.55-.816-3.04-2.158-3.813l-35.903-20.65a4.297 4.297 0 0 0-2.159-.576zM363.413 89.385c-.143 0-.302 0-.431.072l-6.907 4.029a.84.84 0 0 0-.432.72v7.914c0 .298.172.571.432.72l6.907 3.957c.259.15.535.15.791 0l6.907-3.958a.846.846 0 0 0 .432-.719v-7.915a.846.846 0 0 0-.432-.719l-6.907-4.03c-.128-.075-.216-.07-.36-.07z", "M471.05 51.611c-1.244 0-2.454.257-3.525.863l-33.888 19.57c-2.193 1.264-3.526 3.65-3.526 6.189v39.069c0 2.537 1.333 4.92 3.526 6.187l8.85 5.109c4.3 2.119 5.885 2.086 7.842 2.086 6.366 0 10.001-3.863 10.001-10.576V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.39-1.007.935v38.566c0 2.975-3.1 5.968-8.13 3.453l-9.21-5.396c-.326-.177-.576-.49-.576-.863v-39.07c0-.37.247-.747.576-.935L470.547 57.8a.998.998 0 0 1 1.007 0l33.817 19.498c.322.194.576.553.576.936v39.069c0 .373-.188.755-.504.935l-33.889 19.498c-.29.173-.69.173-1.007 0l-8.706-5.18a.905.905 0 0 0-.863 0c-2.403 1.362-2.855 1.52-5.109 2.302-.555.194-1.398.495.288 1.44l11.368 6.69a6.995 6.995 0 0 0 3.526.936 6.949 6.949 0 0 0 3.525-.935l33.889-19.499c2.193-1.275 3.525-3.65 3.525-6.187v-39.07c0-2.538-1.332-4.92-3.525-6.187l-33.889-19.57c-1.062-.607-2.28-.864-3.525-.864z", "M480.116 79.528c-9.65 0-15.397 4.107-15.397 10.937 0 7.408 5.704 9.444 14.966 10.36 11.08 1.085 11.943 2.712 11.943 4.893 0 3.783-3.016 5.396-10.144 5.396-8.957 0-10.925-2.236-11.584-6.691-.078-.478-.447-.864-.936-.864h-4.389c-.54 0-1.007.466-1.007 1.008 0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.209 16.908-11.584 0-7.31-4.996-9.273-15.398-10.648-10.51-1.391-11.512-2.072-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.954 0 9.524 1.5 10.577 6.189.092.44.48.791.935.791h4.39c.27 0 .532-.166.719-.36.184-.207.314-.44.288-.719-.68-8.074-6.064-11.872-16.909-11.872z"],
	javascript: "m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z",
	html: ["M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6", "M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512", "M256 480.5V131H404.3L376 447", "M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26", "M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"],
	css: ["m 160,0 55,0 0,23 -32,0 0,23 32,0 0,23 -55,0 z", "m 226,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z", "m 292,0 55,0 0,20 -32,0 0,4 32,0 0,46 -55,0 0,-21 32,0 0,-4 -32,0 z"],
	github: "M15.5 22.7h-.1l-.1-.1V22v-2.5c0-.7-.1-1.3-.4-1.8 2.3-.4 4.8-1.6 4.8-6.1 0-1.2-.4-2.3-1.1-3.2.2-.6.3-1.7-.2-3.1l-.3-.3s-.2-.1-.4-.1c-.6 0-1.5.2-3 1.2-.8-.1-1.7-.3-2.7-.3-1 0-1.9.1-2.8.3C7.8 5.2 6.8 5 6.2 5c-.2 0-.3.1-.4.1-.1 0-.3.2-.3.3-.5 1.4-.4 2.5-.2 3.1-.7.9-1.1 2-1.1 3.2 0 4.4 2.6 5.6 4.8 6.1-.1.2-.2.5-.3.8-.2.1-.5.2-.9.2s-.8-.1-1.1-.4l-.1-.1c-.1-.1-.1-.2-.2-.2l-.1-.1-.1-.1c0-.1-.8-1.3-2.2-1.4-.5 0-.9.2-1 .5-.2.5.4.9.7 1.1 0 0 .6.3 1 1.4.2.7 1.1 2 3.2 2h.7v1.4l-.1.1s-.1 0 0 0C4 21.2 1 17 1 12.3c0-6.1 4.9-11 11-11s11 4.9 11 11c0 4.7-3 8.9-7.5 10.4z",
	rails: ["M344.6 121.5L344.6 139.6 377.3 139.6C384 139.6 395.5 134.7 395.9 121L395.9 114C395.9 102.3 386.3 95.4 377.3 95.4L361 95.4 361 87 393.3 87 393.3 68.8 362.3 68.8C354.3 68.8 343.6 75.4 343.6 87.7L343.6 94C343.6 106.3 354.2 112.6 362.3 112.6 384.8 112.7 356.9 112.6 377.7 112.6L377.7 121.4M169.4 117.1C169.4 117.1 186.9 115.6 186.9 93 186.9 70.4 165.7 68.3 165.7 68.3L127.5 68.3 127.5 139.6 146.7 139.6 146.7 122.4 163.3 139.6 191.7 139.6 169.4 117.1zM162 102.5L146.7 102.5 146.7 86.2 162.1 86.2C162.1 86.2 166.4 87.8 166.4 94.3 166.4 100.8 162 102.5 162 102.5zM234.3 68.8L214.8 68.8C200.9 68.8 196.2 81.4 196.2 87.4L196.2 139.6 215.7 139.6 215.7 127.1 234 127.1 234 139.6 252.9 139.6 252.9 87.4C252.9 72.2 239.1 68.8 234.3 68.8zM234 106.9L215.6 106.9 215.6 89.6C215.6 89.6 215.6 85.7 221.7 85.7L228.4 85.7C233.8 85.7 233.9 89.6 233.9 89.6L233.9 106.9 234 106.9z", "M7,139.6 L86,139.6 C86,139.6 70.9,70.7 120.9,42.8 C131.8,37.5 166.5,17.7 223.3,59.7 C225.1,58.2 226.8,57 226.8,57 C226.8,57 174.8,5.1 116.9,10.9 C87.8,13.5 52,40 31,75 C10,110 7,139.6 7,139.6 Z", "M7,139.6 L86,139.6 C86,139.6 70.9,70.7 120.9,42.8 C131.8,37.5 166.5,17.7 223.3,59.7 C225.1,58.2 226.8,57 226.8,57 C226.8,57 174.8,5.1 116.9,10.9 C87.8,13.5 52,40 31,75 C10,110 7,139.6 7,139.6 Z", "M7 139.6L86 139.6C86 139.6 70.9 70.7 120.9 42.8 131.8 37.5 166.5 17.7 223.3 59.7 225.1 58.2 226.8 57 226.8 57 226.8 57 174.8 5.1 116.9 10.9 87.7 13.5 51.9 40 30.9 75 9.9 110 7 139.6 7 139.6zM171.6 16.5L172 9.8C171.1 9.3 168.6 8.1 162.3 6.3L161.9 12.9C165.2 14 168.4 15.2 171.6 16.5z", "M162.1 37.7L161.7 44C165 44.1 168.3 44.5 171.6 45.2L172 39C168.6 38.3 165.3 37.9 162.1 37.7zM125.1 6.5L126.1 6.5 124.1.4C121 .4 117.8.6 114.5 1L116.4 6.9C119.3 6.6 122.2 6.5 125.1 6.5zM129.9 43.3L132.2 50.2C135.1 48.8 138 47.6 140.9 46.7L138.7 40.1C135.3 41.1 132.4 42.2 129.9 43.3zM84.5 17L80 10.1C77.5 11.4 74.9 12.8 72.2 14.4L76.8 21.4C79.4 19.8 81.9 18.3 84.5 17zM105 62L109.8 69.2C111.5 66.7 113.5 64.4 115.7 62.1L111.2 55.3C108.9 57.4 106.8 59.7 105 62zM90.5 94.2L98.6 100.6C99 96.7 99.7 92.8 100.7 88.9L93.5 83.2C92.2 86.9 91.3 90.6 90.5 94.2zM46.7 46.7L39.6 40.5C37 43 34.5 45.5 32.2 48L39.9 54.6C42 51.9 44.3 49.2 46.7 46.7zM16.5 91.4L5 87.2C3.1 91.5 1 96.5 0 99.2L11.5 103.4C12.8 100 14.9 95.1 16.5 91.4zM89 119.6C89.2 124.9 89.7 129.2 90.2 132.2L102.2 136.5C101.3 132.6 100.4 128.2 99.8 123.5L89 119.6z"],
	googleScholars: ["M256 411.12L0 202.667 256 0z", "M256 411.12l256-208.453L256 0z", "M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"]

}
const IconsNonStdViewBox = {
	react: "0 0 512 512", 
	youtube2: "0 0 80 32",
	//nodejs: "0 0 442.37 270.929"
	nodejs: "0 0 512 145",
	javascript:"0 0 630 630",
	html:"0 0 512 512",
	css: "0 0 362.73401 511.99998",
	github: "0 0 24 24",
	rails: "0 0 411 155",
	googleScholars: "0 0 512 512"
}

const ClipPath = {
	//nodejs: "M197.02 225.934v107.43h91.683v-107.43zm0 0"
}

const Rect = {
	rails: ["20.3", "70.8", "261.8", "68.8"]
}

const Circle = {
	googleScholars: ["256", "362.667", "149.333"]
}

const Polygon = {
	css: [
		["437.367,100.62 404.321,470.819 255.778,512 107.644,470.877 74.633,100.62", "376.03,447.246 404.27,130.894 256,130.894 256,480.523 ", "150.31,268.217 154.38,313.627 256,313.627 256,268.217", "256,176.305 255.843,176.305 142.132,176.305 146.26,221.716 256,221.716", "256,433.399 256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457"], 
		[ " ", "fill:#ebebeb", "fill:#ebebeb", "fill:#ebebeb", "fill:#ebebeb"]
	], 
	rails: "310.6 121.3 310.6 68.8 290.4 68.8 290.4 121.3 290.4 139.6 310.6 139.6 337.9 139.6 337.9 121.3"
}

export const Icon = ({name, color = violet, width = 36, height = 36}) => {
	return (
	<svg fill={color} 
		version="1.1" 
		xmlns="http://www.w3.org/2000/svg" 
		width={width} 
		height={height}  
		viewBox={IconsNonStdViewBox[name] ? IconsNonStdViewBox[name] : "0 0 32 32"}
		>
	<title>{name}</title>
	{Array.isArray(Icons[name])
			? Icons[name].map((el, ind) => {
				return <path d={Icons[name][ind]}></path>	
			})
			: <path d={Icons[name]}></path>
	}
	{Array.isArray(Polygon[name]) 
		? Polygon[name] 
				? Polygon[name][0].map((el, ind, arr) => {
					const pts = arr[0]
					const filling = arr[1]			
					return <polygon 
						points={arr[0]}	
					// I cannot maps inside the attributes??!	
					// Style={Polygon[name][1].map((el, ind) => {
					// 	console.log("el", el)
					// 	console.log("arr[1]", arr[1])
					// 	return el !== " " ? el : ""}
					// 	)}
					></polygon>	
					})
				: null//}
		: <polygon 
				points={Polygon[name]}
			></polygon>	
	}
	{Rect[name] 
			? Rect[name].map((el, ind, arr) => {
				return <rect
				width={arr[0]}
				height={arr[1]}
				x={arr[2]}
				y={arr[3]}
				>	
				</rect>
			}) : null
		
	}
	{Circle[name] 
			? Circle[name].map((el, ind, arr) => {
				return <circle
				cx={arr[0]}
				cy={arr[1]}
				r={arr[2]}
				>	
				</circle>
			}) : null
		
	}			
	</svg>

	)
}