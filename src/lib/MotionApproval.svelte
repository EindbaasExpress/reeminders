<script lang="ts">
    interface MotionApprovalState {
        output_message: string | undefined,
        granted: boolean | null
    }

    let { onshake } = $props();

    let MotionApproval: MotionApprovalState = $state({
        output_message: undefined,
        granted: null,
    });

function setMotionListeners() {

    // ORIENTATION LISTENER
    window.addEventListener('orientation', event => {
        console.log('Device orientation event: %O', event)
    })

    // MOTION LISTENER
    window.addEventListener('devicemotion', event => {
        console.log('Device motion event: %O', event)

        // SHAKE EVENT
        // Using rotationRate, which essentially is velocity,
        // we check each axis (alpha, beta, gamma) whether they cross a threshold (e.g. 256).
        // Lower = more sensitive, higher = less sensitive. 256 works nice, imho.
        if (((event.rotationRate?.alpha ?? 0) > 256 || (event.rotationRate?.beta ?? 0) > 256 || (event.rotationRate?.gamma ?? 0) > 256)) {
            MotionApproval.output_message = "SHAKEN!"
            onshake?.();
            setTimeout(() => {
                MotionApproval.output_message = undefined
            }, 2000)
        }
    })
}

async function checkMotionPermission() {

    // Any browser using requestPermission API (e.g. Safari on iOS 13+)
    // https://developer.mozilla.org/en-US/docs/Web/API/DeviceOrientationEvent/requestPermission_static
    // however, this static method is not found on the typescript DeviceOrientationEvent, so we cast it to "any" to avoid type errors.
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        // If previously granted, user will see no prompts and listeners get setup right away.
        // If error, we show special UI to the user.
        // FYI, "requestPermission" acts more like "check permission" on the device.
        (DeviceOrientationEvent as any).requestPermission()
        .then((permissionState: string) => {
            if (permissionState == 'granted') {
                // Hide special UI; no longer needed
                MotionApproval.granted = true
                setMotionListeners()
            }
        })
        .catch( (error: unknown) => {
            console.log("Error getting sensor permission: %O", error)
            // Show special UI to user, suggesting they should allow motion sensors. The tap-or-click on the button will invoke the permission dialog.
            MotionApproval.granted = false
        })

    // All other browsers
    } else {
        setMotionListeners()
    }

}

</script>

<div>
    <button 
        id="btn_reqPermission"
        style="display: {MotionApproval.granted ? 'none' : 'block'};padding: 2em"
        onclick={checkMotionPermission}
    >
        Hey! This will be much better with sensors. Allow?
    </button>
    <div id="output_message">${MotionApproval.output_message}</div>
</div>
