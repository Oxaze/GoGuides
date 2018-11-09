<template>
	<div
		class="notification"
		id="notification"
		aria-live="assertive"
		aria-atomic="true"
		aria-relevant="text"
	>
		<div class="notification__message" id="notification__message">{{ messageText }}</div>
	</div>
</template>

<script>
export default {
	name: "notification",
	props: {
		text: String,
	},
	data() {
		return {
			messageText: this.text,
		};
	},
};
</script>
