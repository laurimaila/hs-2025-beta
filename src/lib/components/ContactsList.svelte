<script lang="ts">
	import type { ContactItem } from '$lib/types/content'
	export let contacts: ContactItem
</script>

<div>
	<p><strong>Sähköposti: </strong>{contacts?.email}</p>
	<p><strong>Y-tunnus: </strong>{contacts?.yTunnus}</p>
	<p><strong>Tilinumero: </strong>{contacts?.IBAN}</p>
	<p><strong>Osoite: </strong>{contacts?.address}</p>
</div>
