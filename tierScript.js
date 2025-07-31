document.addEventListener('DOMContentLoaded', function() {
    // Tier configuration
    const tiers = [
        { label: 'S', class: 'S-tier' },
        { label: 'A', class: 'A-tier' },
        { label: 'B', class: 'B-tier' },
        { label: 'C', class: 'C-tier' },
        { label: 'D', class: 'D-tier' },
        { label: 'F', class: 'F-tier' },
        { label: 'AUX', class: 'Aux-tier'}
    ];

    // Get your image paths here
    path = 'champion_icons';
    const imagePaths = [
        `champion_icons/aatrox.png`,
        `champion_icons/ahri.png`,
        `champion_icons/akali.png`,
        `champion_icons/akshan.png`,
        `champion_icons/alistar.png`,
        `champion_icons/ambessa.png`,
        `champion_icons/amumu.png`,
        `champion_icons/anivia.png`,
        `champion_icons/annie.png`,
        `champion_icons/aphelios.png`,
        `champion_icons/ashe.png`,
        `champion_icons/aurelionsol.png`,
        `champion_icons/aurora.png`,
        `champion_icons/azir.png`,
        `champion_icons/bard.png`,
        `champion_icons/belveth.png`,
        `champion_icons/blitzcrank.png`,
        `champion_icons/brand.png`,
        `champion_icons/braum.png`,
        `champion_icons/briar.png`,
        `champion_icons/caitlyn.png`,
        `champion_icons/camille.png`,
        `champion_icons/cassiopeia.png`,
        `champion_icons/chogath.png`,
        `champion_icons/corki.png`,
        `champion_icons/darius.png`,
        `champion_icons/diana.png`,
        `champion_icons/draven.png`,
        `champion_icons/drmundo.png`,
        `champion_icons/ekko.png`,
        `champion_icons/elise.png`,
        `champion_icons/evelynn.png`,
        `champion_icons/ezreal.png`,
        `champion_icons/fiddlesticks.png`,
        `champion_icons/fiora.png`,
        `champion_icons/fizz.png`,
        `champion_icons/galio.png`,
        `champion_icons/gangplank.png`,
        `champion_icons/garen.png`,
        `champion_icons/gnar.png`,
        `champion_icons/gragas.png`,
        `champion_icons/graves.png`,
        `champion_icons/gwen.png`,
        `champion_icons/hecarim.png`,
        `champion_icons/heimerdinger.png`,
        `champion_icons/hwei.png`,
        `champion_icons/illaoi.png`,
        `champion_icons/irelia.png`,
        `champion_icons/ivern.png`,
        `champion_icons/janna.png`,
        `champion_icons/jarvaniv.png`,
        `champion_icons/jax.png`,
        `champion_icons/jayce.png`,
        `champion_icons/jhin.png`,
        `champion_icons/jinx.png`,
        `champion_icons/kaisa.png`,
        `champion_icons/kalista.png`,
        `champion_icons/karma.png`,
        `champion_icons/karthus.png`,
        `champion_icons/kassadin.png`,
        `champion_icons/katarina.png`,
        `champion_icons/kayle.png`,
        `champion_icons/kayn.png`,
        `champion_icons/kennen.png`,
        `champion_icons/khazix.png`,
        `champion_icons/kindred.png`,
        `champion_icons/kled.png`,
        `champion_icons/kogmaw.png`,
        `champion_icons/ksante.png`,
        `champion_icons/leblanc.png`,
        `champion_icons/leesin.png`,
        `champion_icons/leona.png`,
        `champion_icons/lillia.png`,
        `champion_icons/lissandra.png`,
        `champion_icons/lucian.png`,
        `champion_icons/lulu.png`,
        `champion_icons/lux.png`,
        `champion_icons/malphite.png`,
        `champion_icons/malzahar.png`,
        `champion_icons/maokai.png`,
        `champion_icons/masteryi.png`,
        `champion_icons/mel.png`,
        `champion_icons/milio.png`,
        `champion_icons/missfortune.png`,
        `champion_icons/mordekaiser.png`,
        `champion_icons/morgana.png`,
        `champion_icons/naafiri.png`,
        `champion_icons/nami.png`,
        `champion_icons/nasus.png`,
        `champion_icons/nautilus.png`,
        `champion_icons/neeko.png`,
        `champion_icons/nidalee.png`,
        `champion_icons/nilah.png`,
        `champion_icons/nocturne.png`,
        `champion_icons/none.png`,
        `champion_icons/nunu.png`,
        `champion_icons/olaf.png`,
        `champion_icons/orianna.png`,
        `champion_icons/ornn.png`,
        `champion_icons/pantheon.png`,
        `champion_icons/poppy.png`,
        `champion_icons/pyke.png`,
        `champion_icons/qiyana.png`,
        `champion_icons/quinn.png`,
        `champion_icons/rakan.png`,
        `champion_icons/rammus.png`,
        `champion_icons/reksai.png`,
        `champion_icons/rell.png`,
        `champion_icons/renataglasc.png`,
        `champion_icons/renekton.png`,
        `champion_icons/rengar.png`,
        `champion_icons/riven.png`,
        `champion_icons/rumble.png`,
        `champion_icons/ryze.png`,
        `champion_icons/samira.png`,
        `champion_icons/sejuani.png`,
        `champion_icons/senna.png`,
        `champion_icons/seraphine.png`,
        `champion_icons/sett.png`,
        `champion_icons/shaco.png`,
        `champion_icons/shen.png`,
        `champion_icons/shyvana.png`,
        `champion_icons/singed.png`,
        `champion_icons/sion.png`,
        `champion_icons/sivir.png`,
        `champion_icons/skarner.png`,
        `champion_icons/smolder.png`,
        `champion_icons/sona.png`,
        `champion_icons/soraka.png`,
        `champion_icons/swain.png`,
        `champion_icons/sylas.png`,
        `champion_icons/syndra.png`,
        `champion_icons/tahmkench.png`,
        `champion_icons/taliyah.png`,
        `champion_icons/talon.png`,
        `champion_icons/taric.png`,
        `champion_icons/teemo.png`,
        `champion_icons/thresh.png`,
        `champion_icons/tristana.png`,
        `champion_icons/trundle.png`,
        `champion_icons/tryndamere.png`,
        `champion_icons/twistedfate.png`,
        `champion_icons/twitch.png`,
        `champion_icons/udyr.png`,
        `champion_icons/urgot.png`,
        `champion_icons/varus.png`,
        `champion_icons/vayne.png`,
        `champion_icons/veigar.png`,
        `champion_icons/velkoz.png`,
        `champion_icons/vex.png`,
        `champion_icons/viego.png`,
        `champion_icons/viktor.png`,
        `champion_icons/vi.png`,
        `champion_icons/vladimir.png`,
        `champion_icons/volibear.png`,
        `champion_icons/warwick.png`,
        `champion_icons/wukong.png`,
        `champion_icons/xayah.png`,
        `champion_icons/xerath.png`,
        `champion_icons/xinzhao.png`,
        `champion_icons/yasuo.png`,
        `champion_icons/yone.png`,
        `champion_icons/yorick.png`,
        `champion_icons/yunara.png`,
        `champion_icons/yuumi.png`,
        `champion_icons/zac.png`,
        `champion_icons/zed.png`,
        `champion_icons/zeri.png`,
        `champion_icons/ziggs.png`,
        `champion_icons/zilean.png`,
        `champion_icons/zoe.png`,
        `champion_icons/zyra.png`,
    ];

    const tierListContainer = document.querySelector('.tier-list');
    const imagePool = document.getElementById('image-pool');

    // Create tier rows
    tiers.forEach(tier => {
        const tierRow = document.createElement('div');
        tierRow.className = 'tier-row';
        
        const tierLabel = document.createElement('div');
        tierLabel.className = `tier-label ${tier.class}`;
        tierLabel.textContent = tier.label;
        
        const tierContent = document.createElement('div');
        tierContent.className = 'tier-content';
        tierContent.dataset.tier = tier.label;
        
        tierRow.appendChild(tierLabel);
        tierRow.appendChild(tierContent);
        tierListContainer.appendChild(tierRow);
    });

    // Add images to the pool
    imagePaths.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.className = 'pool-image';
        img.draggable = true;
        img.dataset.id = `img-${index}`;
        img.alt = `Image ${index + 1}`;
        
        img.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.dataset.id);
        });
        
        imagePool.appendChild(img);
    });

    // Function to create a tier image with remove button
    function createTierImageElement(imgElement) {
    const container = document.createElement('div');
    container.className = 'tier-image-container';
    
    const imgCopy = imgElement.cloneNode();
    imgCopy.className = 'tier-image';
    imgCopy.draggable = true;
    imgCopy.dataset.id = imgElement.dataset.id;
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-image-btn';
    removeBtn.innerHTML = '&times;';
    removeBtn.title = 'Remove from tier';
    
    removeBtn.addEventListener('click', function() {
        container.remove();
        // Return the original image to the pool
        if (imgElement.parentNode !== imagePool) {
            imagePool.appendChild(imgElement);
        }
    });
    
    imgCopy.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', this.dataset.id);
        // Highlight potential drop targets
        document.querySelectorAll('.tier-content').forEach(zone => {
            zone.style.border = '2px dashed #666';
        });
    });
    
    container.appendChild(imgCopy);
    container.appendChild(removeBtn);
    return container;
}

    // Add drop zones to all tier content areas
document.querySelectorAll('.tier-content').forEach(zone => {
    zone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.backgroundColor = '#e0e0e0';
    });
    
    zone.addEventListener('dragleave', function() {
        this.style.backgroundColor = '';
    });
    
    zone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.backgroundColor = '';
        
        const imageId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.querySelector(`[data-id="${imageId}"]`);
        
        if (draggedElement) {
            // If dragging from one tier to another
            if (draggedElement.closest('.tier-image-container')) {
                const container = draggedElement.closest('.tier-image-container');
                this.appendChild(container);
            } 
            // If dragging from the pool to a tier
            else {
                const tierImage = createTierImageElement(draggedElement);
                this.appendChild(tierImage);
                // Remove from pool if it's coming from there
                if (draggedElement.parentElement === imagePool) {
                    draggedElement.remove();
                }
            }
        }
    });
});
});