<script lang="ts">
    import { onMount } from 'svelte';

    interface MotionApprovalState {
        output_message: string | undefined,
        granted: boolean | null,
        debugInfo: string | undefined,
    }

    let { onshake } = $props();

    let MotionApproval: MotionApprovalState = $state({
        output_message: undefined,
        granted: null,
        debugInfo: undefined,
    });

function setMotionListeners() {

    // ORIENTATION LISTENER
    window.addEventListener('orientation', event => {
        console.log('Device orientation event: %O', event)
    })

    // MOTION LISTENER
    window.addEventListener('devicemotion', event => {
        const alpha = Math.abs(event.rotationRate?.alpha ?? 0);
        const beta  = Math.abs(event.rotationRate?.beta  ?? 0);
        const gamma = Math.abs(event.rotationRate?.gamma ?? 0);

        // Show live sensor values on-screen to help debug on mobile
        MotionApproval.debugInfo = `α:${alpha.toFixed(1)} β:${beta.toFixed(1)} γ:${gamma.toFixed(1)}`;

        // SHAKE EVENT
        // Using rotationRate, which essentially is velocity,
        // we check each axis (alpha, beta, gamma) whether they cross a threshold (e.g. 256).
        // Lower = more sensitive, higher = less sensitive. 256 works nice, imho.
        if (alpha > 256 || beta > 256 || gamma > 256) {
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
        >
            Allow motion sensors to shake for a new quote!
        </button>
    {/if}
    <!-- {#if MotionApproval.output_message}
        <div id="output_message">{MotionApproval.output_message}</div>
    {/if}
    {#if MotionApproval.debugInfo}
        <div id="debug_info" style="font-size: 0.75em; opacity: 0.6">{MotionApproval.debugInfo}</div>
    {/if} -->
</div>
