<script lang="ts">
    import { onMount } from 'svelte';

    interface MotionApprovalState {
        granted: boolean | null,
    }

    let { onshake } = $props();

    let MotionApproval: MotionApprovalState = $state({
        granted: null,
    });

function setMotionListeners() {

    // ORIENTATION LISTENER
    window.addEventListener('orientation', event => {
        console.log('Device orientation event: %O', event)
    })

    // DOUBLE-SHAKE DETECTION
    let lastX = 0, lastY = 0, lastZ = 0;
    let lastTime = 0;
    const shakeThreshold = 15; // lower = more sensitive
    let shakeCount = 0;
    let shakeTimeout: ReturnType<typeof setTimeout> | null = null;
    const maxInterval = 1500; // ms window to register second shake

    window.addEventListener('devicemotion', event => {
        const { x, y, z } = event.accelerationIncludingGravity ?? {};
        const currentTime = Date.now();

        if ((currentTime - lastTime) > 100) {
            const deltaX = Math.abs((x ?? 0) - lastX);
            const deltaY = Math.abs((y ?? 0) - lastY);
            const deltaZ = Math.abs((z ?? 0) - lastZ);

            if ((deltaX + deltaY + deltaZ) > shakeThreshold) {
                shakeCount += 1;

                if (shakeCount === 1) {
                    shakeTimeout = setTimeout(() => {
                        shakeCount = 0;
                    }, maxInterval);
                } else if (shakeCount === 2) {
                    if (shakeTimeout !== null) clearTimeout(shakeTimeout);
                    shakeCount = 0;
                    onshake?.();
                }
            }

            lastX = x ?? 0;
            lastY = y ?? 0;
            lastZ = z ?? 0;
            lastTime = currentTime;
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
        MotionApproval.granted = true
    }

}

onMount(() => {
    checkMotionPermission()
})

</script>

<div style="position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%); z-index: 10; text-align: center;">
    {#if MotionApproval.granted === false}
        <button 
            id="btn_reqPermission"
            style="padding: 1em 2em"
            onclick={checkMotionPermission}
            class="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
        >
            Allow motion sensors to shake for a new learning!
        </button>
    {/if}
    <!-- {#if MotionApproval.output_message}
        <div id="output_message">{MotionApproval.output_message}</div>
    {/if}
    {#if MotionApproval.debugInfo}
        <div id="debug_info" style="font-size: 0.75em; opacity: 0.6">{MotionApproval.debugInfo}</div>
    {/if} -->
</div>
