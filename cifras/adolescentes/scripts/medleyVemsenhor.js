 $(document).ready(() => {

    $('.do').click(() => {
        $('.dim-1').html('G#°')
        $('.dim-2').html('F#°')
        $('.pass-rel-tonica').html('C/B')
        $('.inversao').html('F/A')
    })

    $('.dosus').click(() => {
        $('.dim-1').html('A°')
        $('.dim-2').html('G°')
        $('.pass-rel-tonica').html('C#/C')
        $('.inversao').html('F#/A#')
    })

    $('.re').click(() => {
        $('.dim-1').html('A#°')
        $('.dim-2').html('G#°')
        $('.pass-rel-tonica').html('D/C#')
        $('.inversao').html('G/B')
    })

    $('.mib').click(() => {
        $('.dim-1').html('B°')
        $('.dim-2').html('A°')
        $('.pass-rel-tonica').html('Eb/D')
        $('.inversao').html('Ab/C')
    })

    $('.mi').click(() => {
        $('.dim-1').html('C°')
        $('.dim-2').html('A#°')
        $('.pass-rel-tonica').html('E/D#')
        $('.inversao').html('A/C#')
    })

    $('.fa').click(() => {
        $('.dim-1').html('C#°')
        $('.dim-2').html('B°')
        $('.pass-rel-tonica').html('F/E')
        $('.inversao').html('Bb/D')
    })

    $('.fasus').click(() => {
        $('.dim-1').html('D°')
        $('.dim-2').html('C°')
        $('.pass-rel-tonica').html('F#/F')
        $('.inversao').html('B/D#')
    })

    $('.sol').click(() => {
        $('.dim-1').html('D#°')
        $('.dim-2').html('C#°')
        $('.pass-rel-tonica').html('G/F#')
        $('.inversao').html('C/E')
    })

    $('.solsus').click(() => {
        $('.dim-1').html('E°')
        $('.dim-2').html('D°')
        $('.pass-rel-tonica').html('G#/G')
        $('.inversao').html('C#/F')
    })

    $('.la').click(() => {
        $('.dim-1').html('F°')
        $('.dim-2').html('D#°')
        $('.pass-rel-tonica').html('A/G#')
        $('.inversao').html('D/F#')
    })

    $('.sib').click(() => {
        $('.dim-1').html('F#°')
        $('.dim-2').html('E°')
        $('.pass-rel-tonica').html('Bb/A')
        $('.inversao').html('Eb/G')
    })

    $('.si').click(() => {
        $('.dim-1').html('G°')
        $('.dim-2').html('F°')
        $('.pass-rel-tonica').html('B/A#')
        $('.inversao').html('E/A#')
    })


})