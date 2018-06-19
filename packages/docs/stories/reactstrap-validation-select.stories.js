import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { Label, Button } from 'reactstrap';
import { AvGroup, AvFeedback } from 'availity-reactstrap-validation';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs/react';
import AvApi from '@availity/api-axios';
import providersMock from './mocks/providers';
import providersOrganizations from './mocks/organizations';
import providersRegions from './mocks/regions';
import AvFormResults from './mocks/AvFormResults';

import AvSelect, {
  AvSelectField,
} from '@availity/reactstrap-validation-select';
import AvSelectResource, {
  AvProviderSelect,
  AvOrganizationSelect,
  AvRegionSelect,
  AvPermissionSelect,
  AvNavigationSelect,
  AvUserSelect,
} from '@availity/reactstrap-validation-select/resources';
import README from '@availity/reactstrap-validation-select/README.md';
// import '@av/reactstrap-validation-select/styles.scss';

const options = [
  { label: 'Option 1', value: 'value for option 1' },
  { label: 'Option 2', value: 'value for option 2' },
  { label: 'Option 3', value: 'value for option 3' },
  { label: 'Option 4', value: 'value for option 4' },
];

const avCustomResource = new AvApi({ name: 'my-custom-resource' });

storiesOf('reactstrap Validation|AvSelect', module)
  .addDecorator(withReadme([README]))
  .addDecorator(withKnobs)
  .add('default', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    return (
      <AvFormResults>
        <AvSelect
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          options={options}
          name="standAlone"
          aria-label="stand-alone"
          required={boolean('Required', false)}
          raw={boolean('Raw value', false)}
        />
        <Button className="mt-3" color="primary">
          Submit
        </Button>
      </AvFormResults>
    );
  })
  .add('default (with label)', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    return (
      <AvFormResults>
        <AvGroup>
          <Label for="standAloneWithLabel">
            {text('Label', 'AvSelect Label')}
          </Label>
          <AvSelect
            minLength={min}
            maxLength={max}
            isMulti={isMulti}
            options={options}
            name="standAloneWithLabel"
            inputProps={{ 'aria-label': 'stand-alone with Label' }}
            required={boolean('Required', false)}
            raw={boolean('Raw value', false)}
          />
          <AvFeedback>
            {text('Error Message', 'This field is invalid')}
          </AvFeedback>
        </AvGroup>
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  })
  .add('AvSelectField', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvSelectField
          label={text('Label', 'Field Label')}
          name="AvSelectField"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          options={options}
          required={required}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
          raw={boolean('Raw value', false)}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  })
  .add('AvSelectResource', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvSelectResource
          label={text('Label', 'Select Custom "Thing"')}
          name="AvSelectResource"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          required={required}
          resource={avCustomResource}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  });
storiesOf('reactstrap Validation|AvSelect/resources', module)
  .addDecorator(withReadme([README]))
  .addDecorator(withKnobs)
  .add('AvProviderSelect', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvProviderSelect
          label={text('Label', 'Select Provider')}
          name="AvProviderSelect"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          required={required}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  })
  .add('AvOrganizationSelect', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvOrganizationSelect
          label={text('Label', 'Select Organization')}
          name="AvOrganizationSelect"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          required={required}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  })
  .add('AvRegionSelect', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvRegionSelect
          label={text('Label', 'Select Region')}
          name="AvRegionSelect"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          required={required}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  })
  .add('AvPermissionSelect', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvPermissionSelect
          label={text('Label', 'Select Permission')}
          name="AvPermissionSelect"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          required={required}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  })
  .add('AvNavigationSelect', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvNavigationSelect
          label={text('Label', 'Select Payer Space')}
          name="AvNavigationSelect"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          required={required}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  })
  .add('AvUserSelect', () => {
    const isMulti = boolean('Multiple', false);
    const min = (isMulti && number('Min Selection', 2)) || undefined;
    const max = (isMulti && number('Max Selection', 3)) || undefined;
    const required = boolean('Required', false);
    return (
      <AvFormResults>
        <AvUserSelect
          label={text('Label', 'Select User')}
          name="AvUserSelect"
          minLength={min}
          maxLength={max}
          isMulti={isMulti}
          required={required}
          errorMessage={text('Generic Error Message', 'This field is invalid')}
          validate={{
            required: {
              value: required,
              errorMessage:
                required &&
                text('Required Error Message', 'This field is required'),
            },
          }}
        />
        <Button color="primary">Submit</Button>
      </AvFormResults>
    );
  });