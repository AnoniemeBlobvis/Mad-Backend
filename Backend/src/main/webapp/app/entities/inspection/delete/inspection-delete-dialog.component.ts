import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IInspection } from '../inspection.model';
import { InspectionService } from '../service/inspection.service';

@Component({
  standalone: true,
  templateUrl: './inspection-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class InspectionDeleteDialogComponent {
  inspection?: IInspection;

  constructor(
    protected inspectionService: InspectionService,
    protected activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.inspectionService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
