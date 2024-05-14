import {computed, onBeforeUnmount, onMounted, ref, unref, watch} from "vue";
import AppNotification from "../components/AppNotification/AppNotification.vue";
import AppPopup from "../components/AppPopup/AppPopup.vue";

export const useGame = () => {
    const targetWord = ref('Max')
    const currentLetters = ref([])
    const notificationRef = ref<InstanceType<typeof AppNotification> | null>(null)
    const popupRef = ref<InstanceType<typeof AppPopup> | null>(null)

    const rightWord = computed(() => targetWord.value.toLowerCase())
    const wrongLetters = computed(() => currentLetters.value.filter((item) => !unref(rightWord).includes(item)))
    const rightLetters = computed(() => currentLetters.value.filter((item) => unref(rightWord).includes(item)))
    const wrongLettersLength = computed(() => unref(wrongLetters).length)
    const isLose = computed(() => unref(wrongLettersLength) > 3)

    const checkedLetters = ({ key }) => {
        const currentLetter = key.toLowerCase()
        let regexp = /[a-z]/i

        if (currentLetters.value.includes(currentLetter)) {
            notificationRef.value?.open()

            setTimeout(() => {
                notificationRef.value?.close()
            }, 1000)

            return
        }

        if (regexp.test(currentLetter) && currentLetter.length === 1) {
            currentLetters.value.push(currentLetter)
        }

        if (unref(rightWord).length === unref(rightLetters).length) {
            popupRef.value?.open()
        }
    }

    const relaunchGame = () => {
        currentLetters.value = []
        popupRef.value?.close()
    }

    watch(isLose, () => {
        unref(isLose) && popupRef.value?.open()
    })

    onMounted(() => {
        window.addEventListener('keydown', checkedLetters)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('keydown', checkedLetters)
    })

    return {
        isLose,
        targetWord,
        wrongLetters,
        wrongLettersLength,
        rightLetters,
        relaunchGame,
        popupRef,
        notificationRef,
    }
}