/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function ActiveCampaignForm() {
    const onSubmit = (event) => {
        event.preventDefault();      
        const data = new FormData(event.target)

        fetch('https://thecaribbeanscholar.activehosted.com/proc.php', {
            method: 'POST',
            body: data,
            mode: 'no-cors'
        })
        .then(response => {
            setTimeout(() => {
                console.log('nothing')}, 5000);
            })
            .catch(error => console.log('request failed', error));
    }

    return(
        <form onSubmit={onSubmit}  sx={{
            backgroundColor: 'cta',
            width: ['100%','96%','80%'],
            padding: '1rem',
            margin: '0 auto 5rem auto',
            'input[type=text]': {
              margin: '0 auto',
              width: '18rem',
              height: '2.2rem',

            },

            'input[type=submit]': {
              variant: 'buttons.primary',
              backgroundColor: '#00A99D',
              
              ':hover': {
                cursor: 'pointer'
              }
            }
          }}>
            <h2 sx={{
              color: 'title',
              fontSize: '2rem',
              textAlign: 'center'
              }}>Free E-book: Make Algebra Make Sense</h2>

            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />

            <input
              type="text"
              id='name'
              name="fullname"
              placeholder="John Smith"
              required
            />
            <input
              type="text"
              id='email'
              name="email"
              placeholder="someon@example.com"
              required
            />

            <input type="submit" value="Submit"></input>
        </form>
    )
}