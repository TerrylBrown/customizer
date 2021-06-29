export const productImageSelector = (type, colors) => {
    const sleeve = colors?.sleeve ? colors.sleeve : 'white';
    const body = colors?.body ? colors.body : 'white';

    const productImages = {
        sweater: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260.91 285.33">
                <g>
                    <g>
                        <polygon className="sleeve" fill={sleeve} points="254.4 262.94 256.17 282.37 231.49 283.83 228.89 264.63 254.4 262.94"/>
                        <path className="body" fill={body} d="M157.27,350.84c-.77-11.16-2.69-52.46,8.7-76.15C179.4,246.74,190.31,244,190.31,244c5.65,10.95,19.63,18.7,36,18.7h0a45.75,45.75,0,0,0,25.92-7.62A30.81,30.81,0,0,0,262.3,244s10.91,2.71,24.34,30.66c13.25,27.58,8.48,79,8.48,79,0,35.17,6.09,150.25,6.09,150.25H151.4s6.09-115.08,6.09-150.25C157.49,353.69,157.4,352.66,157.27,350.84Z" transform="translate(-95.85 -231.72)"/>
                        <path className="sleeve" fill={sleeve} d="M324.74,496.34a5.32,5.32,0,0,1-5.7-4L295.12,353.69s4.77-51.42-8.48-79C273.21,246.74,262.3,244,262.3,244a23.77,23.77,0,0,0,2.46-7.6c42.84,17.66,53.22,22.1,60,42.55,8.46,25.58,29.11,198.24,30.49,210.29a5.07,5.07,0,0,1-5,5.39Z" transform="translate(-95.85 -231.72)"/>
                        <path className="sleeve" fill={sleeve} d="M264.76,236.43a23.77,23.77,0,0,1-2.46,7.6,30.81,30.81,0,0,1-10.07,11.08,45.75,45.75,0,0,1-25.92,7.62h0c-16.35,0-30.33-7.75-36-18.7a23.77,23.77,0,0,1-2.46-7.6l8.41-3.21c0,11.94,13.45,21.63,30,21.64h0a36.56,36.56,0,0,0,21.24-6.34c5.44-3.92,8.8-9.33,8.8-15.3Z" transform="translate(-95.85 -231.72)"/>
                        <path className="body" fill={body} d="M226.31,233.22h30c0,6-3.36,11.38-8.8,15.3a36.56,36.56,0,0,1-21.24,6.34h0c-16.58,0-30-9.7-30-21.64h30.05Z" transform="translate(-95.85 -231.72)"/>
                        <path className="sleeve" fill={sleeve} d="M187.85,236.43a23.77,23.77,0,0,0,2.46,7.6S179.4,246.74,166,274.69c-11.39,23.69-9.47,65-8.7,76.15l-23.7,141.48a5.32,5.32,0,0,1-5.7,4l-25.52-1.68a5.07,5.07,0,0,1-5-5.39c1.38-12,22-184.71,30.49-210.29C134.63,258.53,145,254.09,187.85,236.43Z" transform="translate(-95.85 -231.72)"/>
                        <polygon className="sleeve" fill={sleeve} points="32.02 264.63 29.42 283.83 4.74 282.37 6.5 262.94 32.02 264.63"/>
                    </g>
                    <g>
                        <path className="stroke" d="M157.5,349.45l-.23,1.39-23.7,141.48a5.32,5.32,0,0,1-5.7,4l-25.52-1.68a5.07,5.07,0,0,1-5-5.39c1.38-12,22-184.71,30.49-210.29,6.76-20.45,17.14-24.89,60-42.55" transform="translate(-95.85 -231.72)"/>
                        <polyline className="stroke" points="6.5 262.94 4.74 282.37 29.42 283.83 32.02 264.63"/>
                        <path className="stroke" d="M157.49,353.69s-.09-1-.22-2.85c-.77-11.16-2.69-52.46,8.7-76.15C179.4,246.74,190.31,244,190.31,244" transform="translate(-95.85 -231.72)"/>
                        <path className="stroke" d="M295.12,353.69,319,492.32a5.32,5.32,0,0,0,5.7,4l25.51-1.68a5.07,5.07,0,0,0,5-5.39c-1.38-12-22-184.71-30.49-210.29-6.76-20.45-17.14-24.89-60-42.55" transform="translate(-95.85 -231.72)"/>
                        <polyline className="stroke" points="254.4 262.94 256.17 282.37 231.49 283.83 228.89 264.63"/>
                        <path className="stroke" d="M295.12,353.69c0,35.17,6.09,150.25,6.09,150.25H151.4s6.09-115.08,6.09-150.25" transform="translate(-95.85 -231.72)"/>
                        <path className="stroke" d="M196.26,233.22c0,11.94,13.45,21.63,30,21.64h0a36.56,36.56,0,0,0,21.24-6.34c5.44-3.92,8.8-9.33,8.8-15.3" transform="translate(-95.85 -231.72)"/>
                        <path className="stroke" d="M264.76,236.43l-8.41-3.21H196.26l-8.41,3.21a23.77,23.77,0,0,0,2.46,7.6c5.65,10.95,19.63,18.7,36,18.7h0a45.75,45.75,0,0,0,25.92-7.62A30.81,30.81,0,0,0,262.3,244,23.77,23.77,0,0,0,264.76,236.43Z" transform="translate(-95.85 -231.72)"/>
                        <path className="stroke" d="M295.12,353.69s4.77-51.42-8.48-79C273.21,246.74,262.3,244,262.3,244" transform="translate(-95.85 -231.72)"/>
                    </g>
                </g>
            </svg>
        ),
        tshirt: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.41 273.73">
                <g>
                    <g>
                        <path className="body" fill={body} d="M226.32,572.49h30c0,6-3.36,11.39-8.8,15.31a36.56,36.56,0,0,1-21.24,6.34h0c-16.58,0-30-9.7-30-21.65h30Z" transform="translate(-116.6 -570.99)"/>
                        <path className="body" fill={body} d="M301.2,843.22H151.41s5.25-114.77,5.25-150c0,0,3.3-52.69,16.56-80.27,13.43-27.94,17.1-29.68,17.1-29.68C196,594.26,210,602,226.3,602h0a45.82,45.82,0,0,0,25.92-7.6,30.82,30.82,0,0,0,10.06-11.07c.17.09,4,2.37,17.09,29.67,13.26,27.58,16.55,80.27,16.55,80.27C295.94,728.45,301.2,843.22,301.2,843.22Z" transform="translate(-116.6 -570.99)"/>
                        <path className="sleeve" fill={sleeve} d="M334.51,682l-38.57,11.28s-3.29-52.69-16.55-80.27c-13.12-27.3-16.92-29.58-17.09-29.67a23.87,23.87,0,0,0,2.47-7.63c42.82,17.66,51.18,25.8,57.93,46.22C325.08,629.14,330.9,658.34,334.51,682Z" transform="translate(-116.6 -570.99)"/>
                        <path className="sleeve" fill={sleeve} d="M256.36,572.49l8.41,3.2h0a23.87,23.87,0,0,1-2.47,7.63,30.82,30.82,0,0,1-10.06,11.07,45.82,45.82,0,0,1-25.92,7.6h0c-16.35,0-30.33-7.74-36-18.68a24,24,0,0,1-2.46-7.63l8.41-3.2c0,12,13.45,21.65,30,21.65h0a36.56,36.56,0,0,0,21.24-6.34C253,583.88,256.36,578.47,256.36,572.49Z" transform="translate(-116.6 -570.99)"/>
                        <path className="sleeve" fill={sleeve} d="M187.86,575.69a24,24,0,0,0,2.46,7.63s-3.67,1.74-17.1,29.68c-13.26,27.58-16.56,80.27-16.56,80.27L118.1,682c3.61-23.65,9.43-52.85,11.81-60.07C136.66,601.5,145,593.36,187.86,575.69Z" transform="translate(-116.6 -570.99)"/>
                    </g>
                    <g>
                        <path className="stroke" d="M156.66,693.27S160,640.58,173.22,613c13.43-27.94,17.1-29.68,17.1-29.68" transform="translate(-116.6 -570.99)"/>
                        <path className="stroke" d="M264.75,575.69h0c42.82,17.66,51.18,25.8,57.93,46.22,2.38,7.22,8.2,36.42,11.81,60.07l-38.57,11.28c0,35.18,5.26,150,5.26,150H151.41s5.25-114.77,5.25-150L118.1,682c3.61-23.65,9.43-52.85,11.81-60.07,6.75-20.42,15.11-28.56,58-46.23" transform="translate(-116.6 -570.99)"/>
                        <path className="stroke" d="M295.94,693.27s-3.29-52.69-16.55-80.27c-13.12-27.3-16.92-29.58-17.09-29.67h0" transform="translate(-116.6 -570.99)"/>
                        <path className="stroke" d="M196.27,572.49c0,12,13.45,21.65,30,21.65h0a36.56,36.56,0,0,0,21.24-6.34c5.44-3.92,8.8-9.33,8.8-15.31" transform="translate(-116.6 -570.99)"/>
                        <path className="stroke" d="M264.77,575.69l-8.41-3.2H196.27l-8.41,3.2a24,24,0,0,0,2.46,7.63C196,594.26,210,602,226.3,602h0a45.82,45.82,0,0,0,25.92-7.6,30.82,30.82,0,0,0,10.06-11.07,23.87,23.87,0,0,0,2.47-7.63Z" transform="translate(-116.6 -570.99)"/>
                    </g>
                </g>
            </svg>
        ),
        polo: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 219.41 287.46">
                <g>
                    <g>
                        <path className="body" fill={body} d="M859.29,587.65l-1.38,2s0,0,0,0l-1.36-2-3.88-5.82a39.16,39.16,0,0,1-13.5-10.1h37.54a39.16,39.16,0,0,1-13.5,10.1C861.28,584.67,860.07,586.49,859.29,587.65Z" transform="translate(-748.19 -557.25)"/>
                        <path className="body" fill={body} d="M857.91,589.7l5.3-2.05h.29v44H852.6v-44l5.28,2.05v0s0,0,0,0Z" transform="translate(-748.19 -557.25)"/>
                        <path className="body" fill={body} d="M863.21,587.65l5.23-2,9,12.34s9.24-19,10.52-25.44c.38.51,9.87,13.14,23,40.5,13.26,27.58,16.56,80.27,16.56,80.27,0,35.18,5.25,150,5.25,150H783s5.25-114.77,5.25-150c0,0,3.3-52.69,16.55-80.27,13-27.08,22.45-39.72,23-40.48,1.29,6.45,10.52,25.42,10.52,25.42l9-12.34,5.24,2v44h10.9v-44Z" transform="translate(-748.19 -557.25)"/>
                        <path className="sleeve" fill={sleeve} d="M966.1,682l-38.56,11.28S924.24,640.58,911,613c-13.14-27.36-22.63-40-23-40.5h0l8.37,3.18h0c42.85,17.67,51.2,25.81,57.95,46.23C956.67,629.14,962.49,658.34,966.1,682Z" transform="translate(-748.19 -557.25)"/>
                        <path className="sleeve" fill={sleeve} d="M886.28,560.61s-3.32,4.11-9.61,11.11H839.13c-6.29-7-9.61-11.11-9.61-11.11A218.31,218.31,0,0,1,886.28,560.61Z" transform="translate(-748.19 -557.25)"/>
                        <path className="sleeve" fill={sleeve} d="M863.21,587.65l-5.3,2.05h0l1.38-2c.78-1.16,2-3,3.88-5.82a39.16,39.16,0,0,0,13.5-10.1h0c6.29-7,9.61-11.11,9.61-11.11s1.81,3.56,1.81,11.12a6.66,6.66,0,0,1-.12.77h0c-1.28,6.42-10.52,25.44-10.52,25.44l-9-12.34Z" transform="translate(-748.19 -557.25)"/>
                        <path className="sleeve" fill={sleeve} d="M827.85,572.5h0c-.05-.28-.1-.55-.12-.77,0-7.56,1.82-11.12,1.82-11.12s3.32,4.11,9.61,11.11h0a39.16,39.16,0,0,0,13.5,10.1l3.88,5.82,1.36,2v0l-5.28-2.05-5.24-2-9,12.34s-9.23-19-10.52-25.42Z" transform="translate(-748.19 -557.25)"/>
                        <path className="sleeve" fill={sleeve} d="M827.82,572.5v0c-.57.76-10,13.4-23,40.48-13.25,27.58-16.55,80.27-16.55,80.27L749.69,682c3.62-23.65,9.43-52.85,11.81-60.07,6.76-20.42,15.11-28.56,58-46.23Z" transform="translate(-748.19 -557.25)"/>
                    </g>
                    <g>
                        <polyline className="stroke" points="79.66 15.24 79.63 15.24 71.26 18.44"/>
                        <path className="stroke" d="M788.26,693.27s3.3-52.69,16.55-80.27c13-27.08,22.45-39.72,23-40.48l0,0h0" transform="translate(-748.19 -557.25)"/>
                        <path className="stroke" d="M896.34,575.69c42.85,17.67,51.2,25.81,57.95,46.23,2.38,7.22,8.2,36.42,11.81,60.07l-38.56,11.28c0,35.18,5.25,150,5.25,150H783s5.25-114.77,5.25-150L749.69,682c3.62-23.65,9.43-52.85,11.81-60.07,6.76-20.42,15.11-28.56,58-46.23" transform="translate(-748.19 -557.25)"/>
                        <path className="stroke" d="M927.54,693.27S924.24,640.58,911,613c-13.14-27.36-22.63-40-23-40.5h0" transform="translate(-748.19 -557.25)"/>
                        <polyline className="stroke" points="148.17 18.44 148.15 18.43 139.78 15.24 139.77 15.24 139.76 15.23"/>
                        <path className="stroke" d="M839.13,571.72h0a39.16,39.16,0,0,0,13.5,10.1l3.88,5.82,1.36,2" transform="translate(-748.19 -557.25)"/>
                        <path className="stroke" d="M852.6,587.65l-5.24-2-9,12.34s-9.23-19-10.52-25.42v0c-.05-.28-.1-.55-.12-.77,0-7.56,1.82-11.12,1.82-11.12" transform="translate(-748.19 -557.25)"/>
                        <path className="stroke" d="M857.91,589.69l1.38-2c.78-1.16,2-3,3.88-5.82a39.16,39.16,0,0,0,13.5-10.1h0" transform="translate(-748.19 -557.25)"/>
                        <path className="stroke" d="M886.28,560.61s1.81,3.56,1.81,11.12a6.66,6.66,0,0,1-.12.77h0c-1.28,6.42-10.52,25.44-10.52,25.44l-9-12.34-5.23,2" transform="translate(-748.19 -557.25)"/>
                        <path className="stroke" d="M886.28,560.61s-3.32,4.11-9.61,11.11H839.13c-6.29-7-9.61-11.11-9.61-11.11A218.31,218.31,0,0,1,886.28,560.61Z" transform="translate(-748.19 -557.25)"/>
                        <path className="stroke" d="M857.9,589.72v0l5.3-2.05h.29v44H852.6v-44l5.28,2.05v0s0,0,0,0h0" transform="translate(-748.19 -557.25)"/>
                    </g>
                </g>
            </svg>
        ),
        hoodie: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260.91 381.76">
                <g>
                    <g>
                        <polygon className="sleeve" fill={sleeve} points="254.4 359.37 256.17 378.8 231.49 380.26 228.89 361.06 254.4 359.37"/>
                        <path className="sleeve" fill={sleeve} d="M1272.13,496.34a5.32,5.32,0,0,1-5.7-4l-23.92-138.63s4.77-51.42-8.48-79C1220.6,246.74,1209.9,244,1209.9,244l-2.47-.21a35.38,35.38,0,0,0,6.61-6.62c42.85,17.66,51.33,21.33,58.09,41.78,8.46,25.58,29.11,198.24,30.49,210.29a5.07,5.07,0,0,1-5,5.39Z" transform="translate(-1043.24 -135.28)"/>
                        <path className="body" fill={body} d="M1104.66,350.84c-.77-11.16-2.69-52.46,8.7-76.15,13.43-27.95,24.15-30.66,24.15-30.66l.48-1.34a36.64,36.64,0,0,0,12.34,6.66,71.84,71.84,0,0,1,20.05,10.14l3.25,2.33V262a.62.62,0,0,0,0-.1l.15.1v0h0v0l3.43-2.46a81.24,81.24,0,0,1,20-10.14,38.47,38.47,0,0,0,10.13-5.53l2.47.21s10.7,2.71,24.13,30.66c13.25,27.58,8.48,79,8.48,79,0,26.24,3.84,74.22,5.56,108.46a18.16,18.16,0,0,1-16.64,19v-19.8c-14.31-7.55-17-40.81-17-40.81h-80.54s-2.7,33.26-17,40.81v19.8a18.16,18.16,0,0,1-16.65-19c1.72-34.24,4.65-82.22,4.65-108.46C1104.88,353.69,1104.79,352.66,1104.66,350.84Z" transform="translate(-1043.24 -135.28)"/>
                        <polygon className="body" fill={body} points="188.19 345.94 188.19 361.07 73.64 361.07 73.64 345.94 75.14 345.94 130.64 345.94 131.18 345.94 186.68 345.94 188.19 345.94"/>
                        <path className="body" fill={body} d="M1231.43,461.36v19.8c-.5,0-1,.07-1.51.07H1118.38c-.51,0-1,0-1.5-.07v-19.8c14.3-7.55,17-40.81,17-40.81h80.54S1217.12,453.81,1231.43,461.36Z" transform="translate(-1043.24 -135.28)"/>
                        <path className="sleeve" fill={sleeve} d="M1173.83,261.47c1-2.33,6.69-12.77,27.8-22,23.94-10.54,7.54-64.08,4.79-70.11-8.6-18.85-48.91-25.27-65.38,0-3.63,5.58-19.15,59.57,4.79,70.11,21.11,9.27,26.76,19.71,27.8,22v.35l-3.25-2.33a71.84,71.84,0,0,0-20.05-10.14,36.64,36.64,0,0,1-12.34-6.66,30.64,30.64,0,0,1-5.09-5.35,35.7,35.7,0,0,1-6.51-16.07,117.94,117.94,0,0,1-1.37-18.21c0-29.12,10.12-66.25,48.79-66.28h0c47.52,0,53.68,56.44,47.42,84.49A40.14,40.14,0,0,1,1214,237.2a35.38,35.38,0,0,1-6.61,6.62,38.47,38.47,0,0,1-10.13,5.53,81.24,81.24,0,0,0-20,10.14l-3.43,2.46Z" transform="translate(-1043.24 -135.28)"/>
                        <path className="sleeve" fill={sleeve} d="M1173.83,261.47V262s0-.09-.1-.25l-.07.15,0,0v-.35c-1-2.33-6.69-12.77-27.8-22-23.94-10.54-8.42-64.53-4.79-70.11,16.47-25.27,56.78-18.85,65.38,0,2.75,6,19.15,59.57-4.79,70.11C1180.52,248.7,1174.87,259.14,1173.83,261.47Z" transform="translate(-1043.24 -135.28)"/>
                        <path className="sleeve" fill={sleeve} d="M1138,242.69l-.48,1.34s-10.72,2.71-24.15,30.66c-11.39,23.69-9.47,65-8.7,76.15L1081,492.32a5.32,5.32,0,0,1-5.7,4l-25.52-1.68a5.07,5.07,0,0,1-5-5.39c1.38-12,22-184.71,30.49-210.29,6.76-20.45,14.63-23.87,57.48-41.53l.16-.11A30.64,30.64,0,0,0,1138,242.69Z" transform="translate(-1043.24 -135.28)"/>
                        <polygon className="sleeve" fill={sleeve} points="32.02 361.06 29.42 380.26 4.74 378.8 6.5 359.37 32.02 361.06"/>
                    </g>
                    <g>
                        <path className="stroke" d="M1104.89,349.45l-.23,1.39L1081,492.32a5.32,5.32,0,0,1-5.7,4l-25.52-1.68a5.07,5.07,0,0,1-5-5.39c1.38-12,22-184.71,30.49-210.29,6.76-20.45,14.63-23.87,57.48-41.53" transform="translate(-1043.24 -135.28)"/>
                        <polyline className="stroke" points="6.5 359.37 4.74 378.8 29.42 380.26 32.02 361.06"/>
                        <path className="stroke" d="M1104.88,353.69s-.09-1-.22-2.85c-.77-11.16-2.69-52.46,8.7-76.15,13.43-27.95,24.15-30.66,24.15-30.66" transform="translate(-1043.24 -135.28)"/>
                        <path className="stroke" d="M1242.51,353.69l23.92,138.63a5.32,5.32,0,0,0,5.7,4l25.51-1.68a5.07,5.07,0,0,0,5-5.39c-1.38-12-22-184.71-30.49-210.29-6.76-20.45-15.24-24.12-58.09-41.78" transform="translate(-1043.24 -135.28)"/>
                        <polyline className="stroke" points="254.4 359.37 256.17 378.8 231.49 380.26 228.89 361.06"/>
                        <path className="stroke" d="M1118.38,481.23c-.51,0-1,0-1.5-.07a18.16,18.16,0,0,1-16.65-19c1.72-34.24,4.65-82.22,4.65-108.46" transform="translate(-1043.24 -135.28)"/>
                        <path className="stroke" d="M1242.51,353.69c0,26.24,3.84,74.22,5.56,108.46a18.16,18.16,0,0,1-16.64,19c-.5,0-1,.07-1.51.07" transform="translate(-1043.24 -135.28)"/>
                        <path className="stroke" d="M1242.51,353.69s4.77-51.42-8.48-79C1220.6,246.74,1209.9,244,1209.9,244" transform="translate(-1043.24 -135.28)"/>
                        <path className="stroke" d="M1214,237.2a40.14,40.14,0,0,0,7.21-15.93c6.26-28.05.1-84.46-47.42-84.49h0c-38.67,0-48.79,37.16-48.79,66.28a117.94,117.94,0,0,0,1.37,18.21,35.7,35.7,0,0,0,6.51,16.07,30.64,30.64,0,0,0,5.09,5.35,36.64,36.64,0,0,0,12.34,6.66,71.84,71.84,0,0,1,20.05,10.14l3.25,2.33,0,0,.15.1v0h0v0l3.43-2.46a81.24,81.24,0,0,1,20-10.14,38.47,38.47,0,0,0,10.13-5.53A35.38,35.38,0,0,0,1214,237.2Z" transform="translate(-1043.24 -135.28)"/>
                        <path className="stroke" d="M1173.83,262v-.48c1-2.33,6.69-12.77,27.8-22,23.94-10.54,7.54-64.08,4.79-70.11-8.6-18.85-48.91-25.27-65.38,0-3.63,5.58-19.15,59.57,4.79,70.11,21.11,9.27,26.76,19.71,27.8,22V262a.62.62,0,0,0,0-.1l.07-.15C1173.8,261.86,1173.83,262,1173.83,262Z" transform="translate(-1043.24 -135.28)"/>
                        <polyline className="stroke" points="188.19 345.94 188.19 361.07 73.64 361.07 73.64 345.94"/>
                        <path className="stroke" d="M1231.43,481.16v-19.8c-14.31-7.55-17-40.81-17-40.81h-80.54s-2.7,33.26-17,40.81v19.87h114.55Z" transform="translate(-1043.24 -135.28)"/>
                    </g>
                </g>
            </svg>
        )
    }

    return productImages[type];
};